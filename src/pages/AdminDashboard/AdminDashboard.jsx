import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './adminDashboard.module.scss';
import logo from '../../assets/images/logo.svg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdSupervisorAccount } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { axiosPublic } from '~/api/axiosInstance';
import { ADDBOOKING, CRUDCUSTOMER, REGISTERCUSTOMER, TOTALBOOKED, USERWAITFORPREMIUM } from '~/utils/apiContrants';
import user from '../../assets/images/admin/user.png';
import { Bar, Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { formatCurrency, generateApiUrlForMonth, getCurrentDate } from '~/utils/convert';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import images from '~/assets/images';
import config from '~/config';
import jwtDecode from 'jwt-decode';

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const cx = classNames.bind(styles);

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [totalBooked, setTotalBooked] = useState([]);
    const [updateUserInfor, setUpdateUserInfor] = useState([]);
    const [userInfor, setUserInfor] = useState({});
    const [userWairForPremiun, setUserWaitForPremium] = useState([]);
    const startTime = '2024-01-01';
    const endTime = getCurrentDate();
    const [lineData, setLineData] = useState([]);
    const [totalUser, setTotalUser] = useState([]);
    const [totalUserPremium, setTotalUserPremium] = useState([]);
    const location = useLocation();
    const history = useNavigate();
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

    const loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
    const decode = loginInfo ? jwtDecode(loginInfo.accessToken) : null;

    useEffect(() => {
        if (decode === null || decode.role !== 'Manager') {
            history(`/`);
        }
    }, []);

    useEffect(() => {
        const usersPerMonth = Array(12).fill(0);
        users.forEach((entry) => {
            const createdDate = new Date(entry.customerData.created);
            const month = createdDate.getMonth(); // Lấy tháng từ ngày tạo
            usersPerMonth[month]++;
        });
        setTotalUser(usersPerMonth);
    }, [users]);

    const dataLine = {
        labels: labels,
        datasets: [
            {
                label: 'Sales Detail',
                data: lineData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const dataBarUserPremium = {
        labels: labels,
        datasets: [
            {
                label: 'User Premium Detail',
                data: totalUserPremium,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
            },
        ],
    };

    const dataBarUser = {
        labels: labels,
        datasets: [
            {
                label: 'User Detail',
                data: totalUser,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const configBar = {
        type: 'line',
        data: dataLine,
    };

    const handleRegisterButtonClick = () => {
        setShowRegisterForm(true);
    };

    const handleRegisterFormClose = () => {
        setShowRegisterForm(false);
    };

    const handleEditButtonClick = (id) => {
        setUpdateUserInfor((prev) => ({ ...prev, applicationUserId: id }));
        setShowEditForm(true);
    };

    const handleEditFormClose = () => {
        setShowEditForm(false);
    };

    useEffect(() => {
        const fetchDataForMonths = async () => {
            const currentDate = new Date();
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;
            let newLineData = [];
            // let newTotalUser = [];
            let newTotalUserPremium = [];
            for (let month = 1; month <= currentMonth; month++) {
                const url = generateApiUrlForMonth(currentYear, month);
                try {
                    const response = await axiosPublic.get(url);
                    response.data.totalPriceBooked === null
                        ? newLineData.push(0)
                        : newLineData.push(response.data.totalPriceBooked);
                    // response.data.quantityAccountBooked === null
                    //     ? newTotalUserPremium.push(0)
                    //     : newTotalUserPremium.push(response.data.quantityAccountBooked);
                    response.data.quantityAccountBooked === null
                        ? newTotalUserPremium.push(0)
                        : newTotalUserPremium.push(response.data.quantityAccountBooked);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }
            setLineData(newLineData);
            setTotalUserPremium(newTotalUserPremium);
        };
        fetchDataForMonths();
    }, []);

    useEffect(() => {
        const getAllUsers = async () => {
            const response = await axiosPublic.get(CRUDCUSTOMER);
            const userArray = response.data;
            setUsers(userArray);
        };

        getAllUsers();
    }, [users]);

    useEffect(() => {
        const url = `${TOTALBOOKED}/${startTime}/${endTime}`;
        const getAllBooked = async () => {
            const response = await axiosPublic.get(url);
            setTotalBooked(response.data);
        };

        getAllBooked();
    }, [totalBooked]);

    useEffect(() => {
        const getAllUsersWaitingForPremium = async () => {
            const response = await axiosPublic.get(USERWAITFORPREMIUM);
            setUserWaitForPremium(response.data);
        };
        getAllUsersWaitingForPremium();
    }, [userWairForPremiun]);

    const handleDelete = async (id) => {
        const result = await axiosPublic.delete(CRUDCUSTOMER, {
            data: { applicationUserId: id },
        });
        console.log(result);
        setUsers(['']);
        result.status === 200 ? alert('Delete sucessfully') : alert(`Error: ${result.status.message}`);
    };

    const handleLogout = () => {
        localStorage.removeItem('loginInfo');
        //setLoggedIn(false);
        history(config.routes.login);
    };

    const handleUnlock = async (id) => {
        try {
            console.log(id);
            const result = await axiosPublic.post(ADDBOOKING, {
                price: 0,
                customerId: id,
                comboCourseId: '81E210F8-9274-44C5-9256-481ACCE0E8EC',
            });
            result.status === 200 ? alert('Unlock sucessfully') : alert(`Error: ${result.status.message}`);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUpdate = async () => {
        try {
            console.log(updateUserInfor);
            const result = await axiosPublic.put(CRUDCUSTOMER, updateUserInfor);
            if (result.status === 200) {
                alert('Update successfully');
                setUpdateUserInfor({}); // Clear userInfor state after successful registration
                setShowEditForm(false); // Close the registration form
            } else {
                alert(`Error: ${result.status.message}`);
            }
        } catch (error) {
            console.error('Error during update:', error);
        }
    };

    const handleRegister = async () => {
        try {
            const result = await axiosPublic.post(REGISTERCUSTOMER, userInfor);
            if (result.status === 200) {
                alert('Register successfully');
                setUserInfor({}); // Clear userInfor state after successful registration
                setShowRegisterForm(false); // Close the registration form
            } else {
                alert(`Error: ${result.status.message}`);
            }
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };

    return (
        <>
            <div className={cx('navbarTop')}>
                <div className={cx('left-side')}>
                    <div className={cx('logo-container')}>
                        <img src={logo} className={cx('logo')} />
                    </div>
                    <div className={cx('search-bar')}>
                        <input />
                    </div>
                </div>
                <ul className={cx('right-side')}>
                    <li className={cx('item')}>
                        <LuLayoutDashboard />
                    </li>
                    <li className={cx('item')}>
                        <MdSupervisorAccount />
                    </li>
                    {/* <li className={cx('item')}>
                        <IoSettings />
                    </li> */}
                    {/* <li className={cx('item')}>
                        <FaUserCircle />
                    </li> */}
                    <Link
                        to={config.routes.profile}
                        className={cx('ellipse-user', { active: location.pathname === config.routes.profile })}
                    >
                        <img className={cx('user-icon')} src={images.user} alt="User" />
                    </Link>

                    <Link onClick={handleLogout} to={config.routes.login} className={cx('ellipse-search')}>
                        <img className={cx('search-icon')} src={images.logout} alt="Log out" />
                    </Link>
                </ul>
            </div>
            <div className={cx('admin-dashboard')}>
                <div className={cx('navbar_left')}>
                    <ul>
                        <li className={cx('item')}>Dashboard</li>
                        <li className={cx('item')}>Products</li>
                        <li className={cx('item')}>Favourites</li>
                        <li className={cx('item')}>Messenger</li>
                        <li className={cx('item')}>Order Lists</li>
                        <li className={cx('item')}>E-commerce</li>
                    </ul>
                    <div className={cx('divide-line')} />
                    <h3>PAGES</h3>
                    <ul>
                        <li className={cx('item')}>File Manager</li>
                        <li className={cx('item')}>Calender</li>
                        <li className={cx('item')}>Feed</li>
                        <li className={cx('item')}>To-Do</li>
                        <li className={cx('item')}>Contact</li>
                        <li className={cx('item')}>Invoice</li>
                        <li className={cx('item')}>UI Elements</li>
                        <li className={cx('item')}>Profile</li>
                        <li className={cx('item')}>Table</li>
                    </ul>
                    <div className={cx('divide-line')} />
                    <ul>
                        <li className={cx('item')}>Settings</li>
                        <li className={cx('item')}>Logout</li>
                    </ul>
                </div>

                <div className={cx('dashboard-content')}>
                    <div className={cx('dashboard')}>
                        <h1 className={cx('content-title')}>Dashboard</h1>
                        <div className={cx('card-container')}>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total User</h3>
                                <h2 className={cx('number')}>{users.length}</h2>
                                <h3 className={cx('comparision')}>Using our application</h3>
                                <img src={user} />
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total Revenue</h3>
                                <h2 className={cx('number')}>{formatCurrency(totalBooked.totalPriceBooked)}</h2>
                                <h3 className={cx('comparision')}>In this year</h3>
                                {/* <img src={user} /> */}
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total User Premium</h3>
                                <h2 className={cx('number')}>{totalBooked.quantityAccountBooked}</h2>
                                <h3 className={cx('comparision')}>In this year</h3>
                                {/* <img src={user} /> */}
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Exchange Rate</h3>
                                <h2 className={cx('number')}>
                                    {(totalBooked.quantityAccountBooked / users.length) * 100} %
                                </h2>
                                <h3 className={cx('comparision')}>In this year</h3>
                                {/* <img src={user} /> */}
                            </div>
                        </div>
                    </div>
                    <div className={cx('chart-container')}>
                        <Line data={dataLine} options={configBar} />
                    </div>
                    <div className={cx('chart-container')}>
                        <div className={cx('chart')}>
                            <Bar data={dataBarUser} options={options} />
                        </div>
                        <div className={cx('chart')}>
                            <Bar data={dataBarUserPremium} options={options} />
                        </div>
                    </div>

                    <div className={cx('member')}>
                        <h1 className={cx('content-title')}>All Members</h1>
                        <table className={cx('users-table')}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Address</th>
                                    <th>Birthday</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => (
                                    <tr key={user.applicationUserData.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.applicationUserData.fullName}</td>
                                        <td>{user.applicationUserData.userName}</td>
                                        <td>{user.applicationUserData.email}</td>
                                        <td>{user.applicationUserData.phoneNumber || ''}</td>
                                        <td>{user.applicationUserData.address || ''}</td>
                                        <td>{user.applicationUserData.birthDay || ''}</td>
                                        <td className={cx('td-btn')}>
                                            <button
                                                className={cx('edit-btn')}
                                                onClick={() => handleEditButtonClick(user.applicationUserData.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className={cx('delete-btn')}
                                                onClick={() => handleDelete(user.applicationUserData.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button className={cx('register')} onClick={handleRegisterButtonClick}>
                            Register
                        </button>
                    </div>
                    <div className={cx('member')}>
                        <h1 className={cx('content-title')}>User Waiting For Premium</h1>
                        <table className={cx('users-table')}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>Birthday</th>
                                    <th>Is Premium</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userWairForPremiun.map((user, index) => (
                                    <tr key={user.customerId}>
                                        <td>{index + 1}</td>
                                        <td>{user.fullname}</td>
                                        <td>{user.address || ''}</td>
                                        <td>{user.birthDay || ''}</td>
                                        <td>{user.isPremium || 'False'}</td>
                                        <td>
                                            <button
                                                className={cx('delete-btn')}
                                                onClick={() => handleUnlock(user.customerId)}
                                            >
                                                Unlock
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {showRegisterForm && (
                <div className={cx('overlay')}>
                    <div className={cx('register-form-container')}>
                        <form className={cx('register-form')}>
                            <input
                                value={userInfor.fullName}
                                type="text"
                                id="fullname"
                                placeholder="Full Name"
                                onChange={(event) => {
                                    setUserInfor((prev) => ({ ...prev, fullname: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.userName}
                                type="text"
                                id="userName"
                                placeholder="User Name"
                                onChange={(event) => {
                                    setUserInfor((prev) => ({ ...prev, userName: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.password}
                                type="password"
                                id="password"
                                placeholder="Password"
                                onChange={(event) => {
                                    setUserInfor((prev) => ({ ...prev, password: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.email}
                                type="text"
                                id="email"
                                placeholder="Email"
                                onChange={(event) => {
                                    setUserInfor((prev) => ({ ...prev, email: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.phone}
                                type="text"
                                id="phone"
                                placeholder="Phone"
                                onChange={(event) => {
                                    setUserInfor((prev) => ({ ...prev, phone: event.target.value }));
                                }}
                            />
                            <div className={cx('btn-group')}>
                                <button type="button" onClick={handleRegister}>
                                    Register
                                </button>
                                <button type="button" onClick={handleRegisterFormClose}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {showEditForm && (
                <div className={cx('overlay')}>
                    <div className={cx('update-form-container')}>
                        <form className={cx('update-form')}>
                            <input
                                value={userInfor.fullName}
                                type="text"
                                id="fullname"
                                placeholder="Full Name"
                                onChange={(event) => {
                                    setUpdateUserInfor((prev) => ({ ...prev, fullname: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.birthDay}
                                type="text"
                                id="birthDay"
                                placeholder="Birth Day"
                                onChange={(event) => {
                                    setUpdateUserInfor((prev) => ({ ...prev, birthDay: event.target.value }));
                                }}
                            />
                            {/* <input
                                value={userInfor.password}
                                type="password"
                                id="image"
                                placeholder="Password"
                                onChange={(event) => {
                                    setUpdateUserInfor((prev) => ({ ...prev, image: event.target.value }));
                                }}
                            /> */}
                            <input
                                value={userInfor.adress}
                                type="text"
                                id="adress"
                                placeholder="Address"
                                onChange={(event) => {
                                    setUpdateUserInfor((prev) => ({ ...prev, adress: event.target.value }));
                                }}
                            />
                            <input
                                value={userInfor.phone}
                                type="text"
                                id="phone"
                                placeholder="Phone"
                                onChange={(event) => {
                                    setUpdateUserInfor((prev) => ({ ...prev, phone: event.target.value }));
                                }}
                            />
                            <div className={cx('btn-group')}>
                                <button type="button" onClick={handleUpdate}>
                                    Update
                                </button>
                                <button type="button" onClick={handleEditFormClose}>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
