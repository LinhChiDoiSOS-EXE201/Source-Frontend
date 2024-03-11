const images = {
    logo: require('~/assets/images/logo.svg').default,
    user: require('~/assets/images/user.svg').default,
    search: require('~/assets/images/search.svg').default,
    logoWhiteSOS: require('~/assets/images/logoWhite.svg').default,
    logoInst: require('~/assets/images/logoInst.svg').default,
    logoFb: require('~/assets/images/logoFb.svg').default,
    logoPhone: require('~/assets/images/logoPhone.svg').default,
    logoMail: require('~/assets/images/logoMail.svg').default,
    logoGoogle: require('~/assets/images/logoGoogle.svg').default,
    logoFacebookBold: require('~/assets/images/logoFacebookBold.svg').default,
    fire: require('~/assets/images/fire.svg').default,
    iconSearchWhiteColor: require('~/assets/images/iconSearchInChuanDoan.svg').default,
    nguyenTacSoCuu: require('~/assets/images/socapcuu/nguyenTacSoCuu.svg').default,
    layoutColor: require('~/assets/images/socapcuu/layoutColor.svg').default,
    payment: require('~/assets/images/payment.svg').default,
    premium: require('~/assets/images/premium.svg').default,
    logowithContentInside: require('~/assets/images/logowithContentInside.svg').default,
    loiichkhinangcap: require('~/assets/images/loiichkhinangcap.svg').default,
    loiich: require('~/assets/images/4loiich.svg').default,
    logout: require('~/assets/images/logout_icon.svg').default,

    // dienthoai: require('~/assets/images/dienthoaiicon.svg').default,
    nexticon: require('~/assets/images/next-icon.svg').default,
    chuongbao: require('~/assets/images/chuongbao.svg').default,
    chan: require('~/assets/images/chan.svg').default,
    // Hoa Hoan
    hoahoan_main_step_1: require('~/assets/images/hoahoan/mainpicture.svg').default,
    hoahoan_left_step_1: require('~/assets/images/hoahoan/chuongbao.svg').default,
    hoahoan_right_step_1: require('~/assets/images/hoahoan/hohoan.svg').default,
    hoahoan_main_step_2: require('~/assets/images/hoahoan/hoahoan_step_2_main.svg').default,
    hoahoan_main_step_3: require('~/assets/images/hoahoan/hoahoan_step_3_main.svg').default,
    hoahoan_main_step_4: require('~/assets/images/hoahoan/hoahoan_step_4_main.svg').default,
    hoahoan_main_step_5: require('~/assets/images/hoahoan/hoahoan_step_5_main.svg').default,
    dongvat_main_step_1: require('~/assets/images/dongvatcan/dongvat_main_step_1.svg').default,
    dongvat_main_step_2: require('~/assets/images/dongvatcan/dongvat_main_step_2.svg').default,
    dongvat_main_step_3: require('~/assets/images/dongvatcan/dongvat_main_step_3.svg').default,
    cammau_main_step_1: require('~/assets/images/cammau/cammau_main_step_1.svg').default,
    cammau_main_step_2: require('~/assets/images/cammau/cammau_main_step_2.svg').default,
    cammau_main_step_3: require('~/assets/images/cammau/cammau_main_step_3.svg').default,
    cammau_main_step_4: require('~/assets/images/cammau/cammau_main_step_4.svg').default,
    cammau_main_step_5: require('~/assets/images/cammau/cammau_main_step_5.svg').default,
    cammau_main_step_6: require('~/assets/images/cammau/cammau_main_step_6.svg').default,
    socphanve_main_step_1: require('~/assets/images/socpv/socphanve_main_step_1.svg').default,
    socphanve_main_step_2: require('~/assets/images/socpv/socphanve_main_step_2.svg').default,
    socphanve_main_step_3: require('~/assets/images/socpv/socphanve_main_step_3.svg').default,
    socphanve_main_step_4: require('~/assets/images/socpv/socphanve_main_step_4.svg').default,
    socphanve_main_step_5: require('~/assets/images/socpv/socphanve_main_step_5.svg').default,
    socphanve_main_step_6: require('~/assets/images/socpv/socphanve_main_step_6.svg').default,
    socphanve_main_step_7: require('~/assets/images/socpv/socphanve_main_step_7.svg').default,
    //Dot quy
    dotquy_main_step_1: require('~/assets/images/dotquy/dotquy_main_step_1.svg').default,
    dotquy_main_step_2: require('~/assets/images/dotquy/dotquy_main_step_2.svg').default,
    dotquy_main_step_3: require('~/assets/images/dotquy/dotquy_main_step_3.svg').default,
    dotquy_main_step_4: require('~/assets/images/dotquy/dotquy_main_step_4.svg').default,
    dotquy_main_step_5: require('~/assets/images/dotquy/dotquy_main_step_5.svg').default,
    //Duoi nuoc
    duoinuoc_main_step_1: require('~/assets/images/duoinuoc/duoinuoc_main_step_1.svg').default,
    duoinuoc_main_step_2: require('~/assets/images/duoinuoc/duoinuoc_main_step_2.svg').default,
    duoinuoc_main_step_3: require('~/assets/images/duoinuoc/duoinuoc_main_step_3.svg').default,
    duoinuoc_main_step_4: require('~/assets/images/duoinuoc/duoinuoc_main_step_4.svg').default,
    //Dien giat
    diengiat_main_step_1: require('~/assets/images/diengiat/diengiat_main_step_1.svg').default,
    diengiat_main_step_2: require('~/assets/images/diengiat/diengiat_main_step_2.svg').default,
    diengiat_main_step_3: require('~/assets/images/diengiat/diengiat_main_step_3.svg').default,
    diengiat_main_step_4: require('~/assets/images/diengiat/diengiat_main_step_4.svg').default,
    //Hoc di vat
    hocdivat_main_step_1: require('~/assets/images/hocdivat/hocdivat_main_step_1.svg').default,
    hocdivat_main_step_2: require('~/assets/images/hocdivat/hocdivat_main_step_2.svg').default,
    hocdivat_main_step_3: require('~/assets/images/hocdivat/hocdivat_main_step_3.svg').default,
    hocdivat_main_step_4: require('~/assets/images/hocdivat/hocdivat_main_step_4.svg').default,
    //Gay xuong
    gayxuong_main_step_1: require('~/assets/images/gayxuong/gayxuong_main_step_1.svg').default,
    gayxuong_main_step_2: require('~/assets/images/gayxuong/gayxuong_main_step_2.svg').default,
    gayxuong_main_step_3: require('~/assets/images/gayxuong/gayxuong_main_step_3.svg').default,
    //Truy tim
    truytim_main_step_1: require('~/assets/images/truytim/truytim_main_step_1.svg').default,
    truytim_main_step_2: require('~/assets/images/truytim/truytim_main_step_2.svg').default,
    truytim_main_step_3: require('~/assets/images/truytim/truytim_main_step_3.svg').default,
    truytim_main_step_4: require('~/assets/images/truytim/truytim_main_step_4.svg').default,
    //Co giat
    cogiat_main_step_1: require('~/assets/images/cogiat/cogiat_main_step_1.svg').default,
    cogiat_main_step_2: require('~/assets/images/cogiat/cogiat_main_step_2.svg').default,
    cogiat_main_step_3: require('~/assets/images/cogiat/cogiat_main_step_3.svg').default,
    cogiat_main_step_4: require('~/assets/images/cogiat/cogiat_main_step_4.svg').default,
    //Ha duong huyet
    haduonghuyet_main_step_1: require('~/assets/images/haduonghuyet/haduonghuyet_main_step_1.svg').default,
    haduonghuyet_main_step_2: require('~/assets/images/haduonghuyet/haduonghuyet_main_step_2.svg').default,
    haduonghuyet_main_step_3: require('~/assets/images/haduonghuyet/haduonghuyet_main_step_3.svg').default,
    //Con trung can
    contrungcan_main_step_1: require('~/assets/images/dongvatcan/dongvat_main_step_1.svg').default,
    contrungcan_main_step_2: require('~/assets/images/contrungcan/contrungcan_main_step_2.svg').default,
    contrungcan_main_step_3: require('~/assets/images/contrungcan/contrungcan_main_step_3.svg').default,
    //Giam dinh
    giamdinh_main_step_1: require('~/assets/images/dongvatcan/dongvat_main_step_3.svg').default,
    giamdinh_main_step_2: require('~/assets/images/dongvatcan/dongvat_main_step_1.svg').default,
    giamdinh_main_step_3: require('~/assets/images/giamdinh/giamdinh_main_step_3.svg').default,
    giamdinh_main_step_4: require('~/assets/images/giamdinh/giamdinh_main_step_4.svg').default,
    giamdinh_main_step_5: require('~/assets/images/cogiat/cogiat_main_step_4.svg').default,
    //Kim tim dam
    kimtimdam_main_step_1: require('~/assets/images/kimtimdam/kimtimdam_main_step_1.svg').default,
    kimtimdam_main_step_2: require('~/assets/images/dongvatcan/dongvat_main_step_1.svg').default,
    kimtimdam_main_step_3: require('~/assets/images/giamdinh/giamdinh_main_step_3.svg').default,
    kimtimdam_main_step_4: require('~/assets/images/giamdinh/giamdinh_main_step_4.svg').default,
    kimtimdam_main_step_5: require('~/assets/images/dongvatcan/dongvat_main_step_3.svg').default,
    //Bong gan
    bonggan_main_step_1: require('~/assets/images/contrungcan/contrungcan_main_step_3.svg').default,
    bonggan_main_step_2: require('~/assets/images/bonggan/bonggan_main_step_2.svg').default,
    bonggan_main_step_3: require('~/assets/images/bonggan/bonggan_main_step_3.svg').default,
    //Bong?
    bong_main_step_1: require('~/assets/images/bonggan/bonggan_main_step_2.svg').default,
    bong_main_step_2: require('~/assets/images/dongvatcan/dongvat_main_step_1.svg').default,
    bong_main_step_3: require('~/assets/images/bonggan/bonggan_main_step_3.svg').default,
    //Ton thuong mat
    tonthuongmat_main_step_1: require('~/assets/images/contrungcan/contrungcan_main_step_3.svg').default,
    tonthuongmat_main_step_2: require('~/assets/images/tonthuongmat/tonthuongmat_main_step_2.svg').default,
    tonthuongmat_main_step_3: require('~/assets/images/bonggan/bonggan_main_step_3.svg').default,
    tonthuongmat_main_step_4: require('~/assets/images/cogiat/cogiat_main_step_4.svg').default,
    //Soc nhiet
    socnhiet_main_step_1: require('~/assets/images/socnhiet/socnhiet_main_step_1.svg').default,
    socnhiet_main_step_2: require('~/assets/images/socnhiet/socnhiet_main_step_2.svg').default,
    socnhiet_main_step_3: require('~/assets/images/socnhiet/socnhiet_main_step_3.svg').default,
    socnhiet_main_step_4: require('~/assets/images/socnhiet/socnhiet_main_step_4.svg').default,
    socnhiet_main_step_5: require('~/assets/images/socnhiet/socnhiet_main_step_5.svg').default,
    socnhiet_main_step_6: require('~/assets/images/socnhiet/socnhiet_main_step_6.svg').default,
    //Ha than nhiet
    hathannhiet_main_step_1: require('~/assets/images/hathannhiet/hathannhiet_main_step_1.svg').default,
    hathannhiet_main_step_2: require('~/assets/images/socnhiet/socnhiet_main_step_1.svg').default,
    hathannhiet_main_step_3: require('~/assets/images/hathannhiet/hathannhiet_main_step_3.svg').default,
    //Sot cao
    sotcao_main_step_1: require('~/assets/images/sotcao/sotcao_main_step_1.svg').default,
    sotcao_main_step_2: require('~/assets/images/sotcao/sotcao_main_step_2.svg').default,
    sotcao_main_step_3: require('~/assets/images/sotcao/sotcao_main_step_3.svg').default,
    sotcao_main_step_4: require('~/assets/images/sotcao/sotcao_main_step_4.svg').default,
    //Chay mau cam
    chaymaucam_main_step_1: require('~/assets/images/chaymaucam/chaymaucam_main_step_1.svg').default,
    chaymaucam_main_step_2: require('~/assets/images/chaymaucam/chaymaucam_main_step_2.svg').default,
    chaymaucam_main_step_3: require('~/assets/images/chaymaucam/chaymaucam_main_step_3.svg').default,
    chaymaucam_main_step_4: require('~/assets/images/chaymaucam/chaymaucam_main_step_4.svg').default,
    //Ngat
    ngat_main_step_1: require('~/assets/images/ngat/ngat_main_step_1.svg').default,
    ngat_main_step_2: require('~/assets/images/ngat/ngat_main_step_2.svg').default,
    ngat_main_step_3: require('~/assets/images/ngat/ngat_main_step_3.svg').default,
    ngat_main_step_4: require('~/assets/images/ngat/ngat_main_step_4.svg').default,
    ngat_main_step_5: require('~/assets/images/ngat/ngat_main_step_5.svg').default,
    //Ngo doc
    ngodoc_main_step_1: require('~/assets/images/ngodoc/ngodoc_main_step_1.svg').default,
    ngodoc_main_step_2: require('~/assets/images/ngodoc/ngodoc_main_step_2.svg').default,
    ngodoc_main_step_3: require('~/assets/images/ngodoc/ngodoc_main_step_3.svg').default,
    ngodoc_main_step_4: require('~/assets/images/ngodoc/ngodoc_main_step_4.svg').default,
    ngodoc_main_step_5: require('~/assets/images/ngodoc/ngodoc_main_step_5.svg').default,
    //That nut
    thatnutdaythuyendai_main_step_1: require('~/assets/images/thatnutdaythuyendai/thatnutdaythuyendai_main_step_1.svg')
        .default,
    thatnutdaythuyendai_main_step_2: require('~/assets/images/thatnutdaythuyendai/thatnutdaythuyendai_main_step_2.svg')
        .default,
    thatnutdaythuyendai_main_step_3: require('~/assets/images/thatnutdaythuyendai/thatnutdaythuyendai_main_step_3.svg')
        .default,
    //SOS
    sos_main_step_1: require('~/assets/images/sos/sos_main_step_1.svg').default,
    sos_main_step_2: require('~/assets/images/sos/sos_main_step_2.svg').default,
    //Tao lua
    taolua_main_step_1: require('~/assets/images/taolua/taolua_main_step_1.svg').default,
    taolua_main_step_2: require('~/assets/images/taolua/taolua_main_step_2.svg').default,
    //Xac dinh phuong huong
    xacdinhphuonghuong_main_step_1: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_1.svg')
        .default,
    xacdinhphuonghuong_main_step_2: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_2.svg')
        .default,
    xacdinhphuonghuong_main_step_3: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_3.svg')
        .default,
    xacdinhphuonghuong_main_step_4: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_4.svg')
        .default,
    xacdinhphuonghuong_main_step_5: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_5.svg')
        .default,
    xacdinhphuonghuong_main_step_6: require('~/assets/images/xacdinhphuonghuong/xacdinhphuonghuong_main_step_6.svg')
        .default,
    socphanve_step_1_mini_content_1: require('~/assets/images/socpv/socphanve_step_1_mini_content_1.svg').default,
    socphanve_step_1_mini_content_2: require('~/assets/images/socpv/socphanve_step_1_mini_content_2.svg').default,
    socphanve_step_1_mini_content_3: require('~/assets/images/socpv/socphanve_step_1_mini_content_3.svg').default,
    socphanve_step_3_mini_content_1: require('~/assets/images/socpv/socphanve_step_3_mini_content_1.svg').default,
    socphanve_step_3_mini_content_2: require('~/assets/images/socpv/socphanve_step_3_mini_content_2.svg').default,
    socphanve_step_6_mini_content_1: require('~/assets/images/socpv/socphanve_step_6_mini_content_1.svg').default,
    socphanve_step_6_mini_content_2: require('~/assets/images/socpv/socphanve_step_6_mini_content_2.svg').default,
};

export default images;
