# Hàm tính BMI
def tinh_bmi(chieu_cao, can_nang):
    return can_nang / (chieu_cao * chieu_cao)


# Hàm phân loại BMI
def phan_loai(bmi):
    if bmi < 18.5:
        return "Gầy", "Thấp"
    elif bmi < 25:
        return "Bình thường", "Trung bình"
    elif bmi < 30:
        return "Hơi béo", "Cao"
    elif bmi < 35:
        return "Béo phì cấp độ 1", "Cao"
    elif bmi < 40:
        return "Béo phì cấp độ 2", "Rất cao"
    else:
        return "Béo phì cấp độ 3", "Nguy hiểm"


# Nhập chiều cao và cân nặng
chieu_cao = float(input("Nhập chiều cao (m): "))
can_nang = float(input("Nhập cân nặng (kg): "))

# Tính BMI
bmi = tinh_bmi(chieu_cao, can_nang)

# Phân loại
loai, nguy_co = phan_loai(bmi)

# In kết quả
print("\n--- KẾT QUẢ ---")
print("BMI của bạn:", round(bmi, 2))
print("Phân loại:", loai)
print("Nguy cơ phát triển bệnh:", nguy_co)