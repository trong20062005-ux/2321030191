var danhSachVid = [
        {
            id: 1,
            ten: "Nhóc Trùm | Boss Baby",
            duongDanAnh: "../ảnh/phim1.png",
            duongDanYoutube:"https://www.youtube.com/embed/uyXucUY9RHo?si=IMQNvxmssLlx5rmz"
        },
        {
            id: 2,
            ten: "Shark Mode at the Beach! 🦈 Sharkdog | Netflix Jr",
            duongDanAnh: "../ảnh/phim2.png",
            duongDanYoutube:"https://www.youtube.com/embed/G2iWXTyqZNc?si=s_U4cX4UKOcPTaDZ"

        },
        {
            id: 3,
            ten: "meo am hia",
            duongDanAnh: "../ảnh/phim3.png",
            duongDanYoutube:"https://www.youtube.com/embed/G2iWXTyqZNc?si=s_U4cX4UKOcPTaDZ"

        },
        {
            id: 4,
            ten: "trụ cột",
            duongDanAnh: "../ảnh/phim4.png",
            duongDanYoutube:"https://www.youtube.com/embed/G2iWXTyqZNc?si=s_U4cX4UKOcPTaDZ"

        },
        {
            id: 5,
            ten: "pikachu",
            duongDanAnh: "../ảnh/phim5.png",
            duongDanYoutube:"https://www.youtube.com/embed/1KW0Xc9RMFw?si=TqaqhdTeXJUyBpFg"

        },
    ];

    function chonPhim(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }