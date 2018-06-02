drop database if exists ibags;
create database ibags;
use ibags;

/***TẠO BẢNG**/
create table loaisanpham(
	maloai int auto_increment primary key,
    tenloai nvarchar(30)
);

create table thuonghieu(
	mathuonghieu int auto_increment primary key,
    tenthuonghieu nvarchar(30)
);

create table sanpham(
	masanpham int auto_increment primary key,
    maloai int not null,
    mathuonghieu int not null,
    ten nvarchar(50) not null,
    xuatxu nvarchar(20),
    gia int unsigned not null default 0,
    chatlieu nvarchar(30),
    kichthuoc varchar(20),
    trongluong decimal,
    luotmua int unsigned not null default 0,
    luotxem int unsigned not null default 0,
    soluong int unsigned not null default 0,
    foreign key(maloai)
    references loaisanpham(maloai),
    foreign key(mathuonghieu)
    references thuonghieu(mathuonghieu)
);

create table thanhvien(
	mathanhvien int auto_increment primary key,
    tenthanhvien nvarchar(50),
    username varchar(20),
    password char(64),
    quyenhan tinyint, /* 0- người dùng, 1- admin*/
    sdt nvarchar(12),
    email varchar(40),
    diachi nvarchar(100),
    gioitinh tinyint,
    ngaysinh date
);

create table giaodich(
	magiaodich int auto_increment primary key,
    makhach int,
    sotien int,
    conggiaodich nvarchar(40),
    foreign key(makhach)
    references thanhvien(mathanhvien)    
);

create table donhang(
	madon int auto_increment primary key,
    makhachhang int,
    magiaodich int,
	ngaydat date,
    tonggiatri int,
    trangthai int,
    foreign key(makhachhang)
    references thanhvien(mathanhvien),
    foreign key(magiaodich)
    references giaodich(magiaodich)
);

create table sanpham_donhang(
	madon int,
    masanpham int,
    soluong int,
    primary key(madon, masanpham),
    foreign key(madon)
    references donhang(madon),
    foreign key(masanpham)
    references sanpham(masanpham)
);


