import axios from "axios";

export const DOMAIN = "https://elearningnew.cybersoft.edu.vn/api/";
export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjE5LzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDQ1NDQwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0NjAyMDAwfQ.49m9-EoDr6zr7UOk_79hfcvJWKI_s0Wy_g40ossfl9c";
export const GROUPID = "GP01";

export const USER_LOGIN = "userLogin";
export const ACCESSTOKEN = "accessToken";

export const API_KHOAHOC = "QuanLyKhoaHoc/";
export const API_NGUOIDUNG = "QuanLyNguoiDung/";

//API Người Dùng
export const API_DANGNHAP_NGUOIDUNG = DOMAIN + API_NGUOIDUNG + "DangNhap";
export const API_DANGKY_NGUOIDUNG = DOMAIN + API_NGUOIDUNG + "DangKy";
export const API_THONGTIN_NGUOIDUNG =
  DOMAIN + API_NGUOIDUNG + "ThongTinTaiKhoan";
export const API_CAPNHAT_THONGTIN_NGUOIDUNG =
  DOMAIN + API_NGUOIDUNG + "CapNhatThongTinNguoiDung";
export const API_LAY_MA_LOAI_NGUOI_DUNG =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachLoaiNguoiDung";
export const API_LAY_DANH_SACH_NGUOI_DUNG_PHAN_TRANG =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachNguoiDung_PhanTrang?";
//API Khoá Học
export const API_DANG_KY_KHOA_HOC = DOMAIN + API_KHOAHOC + "DangKyKhoaHoc";
export const API_DANHMUC_KHOAHOC = DOMAIN + API_KHOAHOC + "LayDanhMucKhoaHoc";
export const API_CHITIET_KHOAHOC =
  DOMAIN + API_KHOAHOC + "LayThongTinKhoaHoc?maKhoaHoc=";
export const API_HUYGHIDANH_KHOAHOC = DOMAIN + API_KHOAHOC + "HuyGhiDanh";
export const API_TIM_KIEM_KHOA_HOC =
  DOMAIN + API_KHOAHOC + "LayDanhSachKhoaHoc?tenKhoaHoc=";
export const API_THEM_KHOA_HOC_ADMIN = DOMAIN + API_KHOAHOC + "ThemKhoaHoc";
export const API_LAY_DANH_SACH_KHOA_HOC_PHAN_TRANG =
  DOMAIN + API_KHOAHOC + "LayDanhSachKhoaHoc_PhanTrang?";
export const API_LAY_THONG_TIN_KHOA_HOC_ACTION =
  DOMAIN + API_KHOAHOC + "LayThongTinKhoaHoc?maKhoaHoc=";
export const API_CAPNHAT_THONG_TIN_KHOA_HOC =
  DOMAIN + API_KHOAHOC + "CapNhatKhoaHoc";
//API Admin
export const API_LAY_DANH_SACH_NGUOI_DUNG =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachNguoiDung?";
export const API_CAPNHAT_THONGTIN_NGUOIDUNG_ADMIN =
  DOMAIN + API_NGUOIDUNG + "CapNhatThongTinNguoiDung";
export const API_XOA_NGUOI_DUNG_ADMIN =
  DOMAIN + API_NGUOIDUNG + "XoaNguoiDung?TaiKhoan=";
export const API_THEM_NGUOI_DUNG_ADMIN =
  DOMAIN + API_NGUOIDUNG + "ThemNguoiDung";
export const API_CHI_TIET_NGUOI_DUNG_ADMIN =
  DOMAIN + API_NGUOIDUNG + "TimKiemNguoiDung";
export const API_TIM_KIEM_NGUOI_DUNG_ADMIN =
  DOMAIN + API_NGUOIDUNG + "TimKiemNguoiDung?";
//API Admin nâng cao khoá học
export const API_LAY_DANH_SACH_KHOA_HOC_CHUA_GHI_DANH_ADMIN =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachKhoaHocChuaGhiDanh?";
export const API_GHI_DANH_KHOA_HOC_ADMIN =
  DOMAIN + API_KHOAHOC + "GhiDanhKhoaHoc";
export const API_XOA_KHOA_HOC_ADMIN =
  DOMAIN + API_KHOAHOC + "XoaKhoaHoc?MaKhoaHoc=";
export const API_LAY_DS_KHOA_HOC_CHO_XET_DUYET =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachKhoaHocChoXetDuyet";
export const API_LAY_DS_KHOA_HOC_DA_XET_DUYET =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachKhoaHocDaXetDuyet";
//API Admin nâng cao người dùng
export const API_LAY_DS_NGUOI_DUNG_CHUA_GHI_DANH =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachNguoiDungChuaGhiDanh";
export const API_LAY_DS_HOC_VIEN_CHO_XET_DUYET =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachHocVienChoXetDuyet";
export const API_LAY_HOC_VIEN_DA_THAM_GIA =
  DOMAIN + API_NGUOIDUNG + "LayDanhSachHocVienKhoaHoc";
//config axios
export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      ["TokenCybersoft"]: TOKEN_CYBERSOFT,
      ["Authorization"]: "Bearer " + localStorage.getItem(ACCESSTOKEN),
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);
