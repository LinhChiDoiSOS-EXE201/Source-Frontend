import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './adminDashboard.module.scss';
import logo from '../../assets/images/logo.svg';
import { LuLayoutDashboard } from 'react-icons/lu';
import { MdSupervisorAccount } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { axiosPublic } from '~/api/axiosInstance';
import { ADDBOOKING, CRUDCUSTOMER, REGISTERCUSTOMER, USERWAITFORPREMIUM } from '~/utils/apiContrants';
import user from '../../assets/images/admin/user.png';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

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

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Sales Detail',
            data: [65, 59, 80, 81, 56, 55, 40, 66, 20, 40, 40, 90],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
        },
    ],
};

const config = {
    type: 'line',
    data: data,
};

const cx = classNames.bind(styles);

export default function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const [updateUserInfor, setUpdateUserInfor] = useState([]);
    const [userInfor, setUserInfor] = useState({});
    const [userWairForPremiun, setUserWaitForPremium] = useState([]);

    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showEditForm, setShowEditForm] = useState(false);

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
        const getAllUsers = async () => {
            const response = await axiosPublic.get(CRUDCUSTOMER);
            const userArray = response.data.map((item) => item.applicationUserData);
            setUsers(userArray);
        };

        getAllUsers();
    }, [users]);

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
                    <li className={cx('item')}>
                        <FaUserCircle />
                    </li>
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
                                <h2 className={cx('number')}>40,689</h2>
                                <h3 className={cx('comparision')}>8.5% Up from yesterday</h3>
                                <img src={user} />
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total User</h3>
                                <h2 className={cx('number')}>40,689</h2>
                                <h3 className={cx('comparision')}>8.5% Up from yesterday</h3>
                                <img src={user} />
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total User</h3>
                                <h2 className={cx('number')}>40,689</h2>
                                <h3 className={cx('comparision')}>8.5% Up from yesterday</h3>
                                <img src={user} />
                            </div>
                            <div className={cx('card')}>
                                <h3 className={cx('category')}>Total User</h3>
                                <h2 className={cx('number')}>40,689</h2>
                                <h3 className={cx('comparision')}>8.5% Up from yesterday</h3>
                                <img src={user} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('chart-container')}>
                        <Line data={data} options={config} />
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
                                    <tr key={user.id}>
                                        <td>{index + 1}</td>
                                        <td>{user.fullName}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phoneNumber || ''}</td>
                                        <td>{user.address || ''}</td>
                                        <td>{user.birthDay || ''}</td>
                                        <td className={cx('td-btn')}>
                                            <button
                                                className={cx('edit-btn')}
                                                onClick={() => handleEditButtonClick(user.id)}
                                            >
                                                Edit
                                            </button>
                                            <button className={cx('delete-btn')} onClick={() => handleDelete(user.id)}>
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
