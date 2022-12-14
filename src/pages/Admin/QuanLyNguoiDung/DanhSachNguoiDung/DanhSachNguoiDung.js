import { Modal, Table, Input, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  layDanhSachNguoiDung,
  adminXoaNguoiDungAction,
  layDanhSachNguoiDungSearch,
} from "../../../../redux/actions/AdminQuanLyAction";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function DanhSachNguoiDung() {
  const { Search } = Input;
  const [data, setData] = useState();
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(
    (rootReducer) => rootReducer.DanhSachNguoiDungReducer
  );

  useEffect(() => {
    dispatch(layDanhSachNguoiDung());
  }, []);

  useEffect(() => {
    setData(danhSachNguoiDung);
  }, [danhSachNguoiDung]);

  const onSearch = (value) => {
    // Search only by first name
    // dispatch(layDanhSachNguoiDungSearch(value));

    // Search by keyword in first and last name
    setData(
      danhSachNguoiDung.filter((val) =>
        // Remove accents/diacritics using normalize() and replace()
        val.hoTen
          .trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(
            value
              .trim()
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
          )
      )
    );
  };

  const xoaNguoiDungAdmin = (taiKhoan) => {
    swal({
      title: "Bạn có chắc muốn xoá không?",
      showCancelButton: true,
      confirmButtonText: "Chắc chắn",
    }).then((result) => {
      if (result === true) {
        dispatch(adminXoaNguoiDungAction(taiKhoan));
      }
    });
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      width: "10%",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: "25%",
      render: (text, nguoiDung) => {
        return (
          <Fragment key={nguoiDung.email}>
            {nguoiDung.email.length > 20
              ? nguoiDung.email.substr(0, 30) + "..."
              : nguoiDung.email}
          </Fragment>
        );
      },
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "soDt",
      width: "10%",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      width: "17%",
    },
    {
      title: "Chức năng",
      dataIndex: "nguoiDung",
      key: "taiKhoan",
      width: "23%",
      render: (text, nguoiDung) => {
        return (
          <Fragment>
            <Link
              to={`/admin/quanlynguoidung/capnhatthongtinnguoidung/${nguoiDung.taiKhoan}`}
            >
              <Tooltip title="Edit">
                <button className="btn__edit_user mr-2">
                  <EditOutlined />
                </button>
              </Tooltip>
            </Link>

            <Tooltip title="Delete">
              <button
                className="btn__delete_user text-white mr-2"
                onClick={() => xoaNguoiDungAdmin(nguoiDung.taiKhoan)}
              >
                <DeleteOutlined />
              </button>
            </Tooltip>

            <Link
              to={`/admin/quanlynguoidung/ghidanhnguoidung/${nguoiDung.taiKhoan}`}
            >
              <Tooltip title="Registered courses">
                <button className="btn__ghidanh_user">
                  {/* <i className="fas fa-registered"></i> */}
                  <UnorderedListOutlined />
                </button>
              </Tooltip>
            </Link>
          </Fragment>
        );
      },
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div className="container mt-5">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/">
              Trang chủ
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link className="style__navlink" to="/admin">
              Quản trị
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Quản lý người dùng
          </li>
        </ol>
      </nav>
      <div className="row">
        <div className="col-md-6">
          <h2>Quản lý người dùng</h2>
          <Link
            className="btn btn-success mb-5"
            to="/admin/quanlynguoidung/themnguoidung"
          >
            Thêm người dùng
          </Link>
        </div>
        <div className="col-md-6">
          <Search
            placeholder="Nhập tên người dùng..."
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        rowKey="taiKhoan"
      />
    </div>
  );
}
