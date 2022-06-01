var services = new Services();

function getEle(id) {
    return document.getElementById(id);
}

function getList() {
    getEle("loader").style.display = "block";
    services
        .getListTeachers()
        .then(function (result) {
            // console.log(result.data);
            var arrTeacher = result.data.map(function (teacher) {
                if (teacher.loaiND == "GV") {
                    return teacher;
                }
            })
            var arrTeacherGV = arrTeacher.filter(function (teacherGV) {
                return teacherGV !== undefined;
            })
            renderListTeacher(arrTeacherGV);
            getEle("loader").style.display = "none"
        })
        .catch(function (error) {
            console.log(error);
            getEle("loader").style.display = "none"
        })
};

getList();

function renderListTeacher(data) {
    var contentHTML = "";
    data.forEach(function (teacher) {
        contentHTML += `
            <div class="col-lg-3 col-sm-6 col-12 item__content">
                    <div class="card" style="width:245px">
                        <div class="card__img">
                            <img class="card-img-top" src="./img/${teacher.hinhAnh}" alt="Card image" style="width:100%">
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">
                                <p>${teacher.ngonNgu}</p>
                                <p>${teacher.hoTen}</p>
                            </h4>
                            <p class="card-text">${teacher.moTa}</p>
                        </div>
                    </div>
            </div>`;
    });
    // console.log(contentHTML);
    getEle("tbTeacher").innerHTML = contentHTML;
}

function checkGV() {
    if (teacher.loaiND == "GV") {
        return teacher;
    }
}