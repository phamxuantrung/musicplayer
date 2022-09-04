const songs = [
    {
        id: 1,
        order: "01",
        name: "Ngẫu Hứng",
        author: "Hoaprox",
        img: "./images/songs/ngau_hung.png",
        audio: "./audio/ngau_hung.mp3",
        top: true
    },
    {
        id: 2,
        order: "02",
        name: "DJ China Vol 80",
        author: "MC小蒋",
        img: "./images/songs/DJ_china_vol_80.png",
        audio: "./audio/DJ_china_vol_80.mp3",
        top: false
    },
    {
        id: 3,
        order: "03",
        name: "Mặt trời không lặn (Remix)",
        author: "Trương Đại Lôi",
        img: "./images/songs/mat_troi_khong_lan_remix.png",
        audio: "./audio/mat_troi_khong_lan_remix.mp3",
        top: false
    },
    {
        id: 4,
        order: "04",
        name: "L'Amour Toujours Remix",
        author: "Gigi D'agostino",
        img: "./images/songs/l'amour_toujours_remix.png",
        audio: "./audio/l'amour_toujours_remix.mp3",
        top: false
    },
    {
        id: 5,
        order: "05",
        name: "Hạc Giấy",
        author: "Yến NAPUN",
        img: "./images/songs/hac_giay.png",
        audio: "./audio/hac_giay.mp3",
        top: true
    },
    {
        id: 6,
        order: "06",
        name: "Chỉ muốn bên em thật gần",
        author: "Yling",
        img: "./images/songs/chi_muon_ben_em_that_gan.png",
        audio: "./audio/chi_muon_ben_em_that_gan.mp3",
        top: false
    },
    {
        id: 7,
        order: "07",
        name: "Lấy chồng sớm làm gì",
        author: "Hương tú",
        img: "./images/songs/lay_chong_som_lam_gi.png",
        audio: "./audio/lay_chong_som_lam_gi.mp3",
        top: false
    },
    {
        id: 8,
        order: "08",
        name: "Nụ hồng mong manh",
        author: "Nhi nhi",
        img: "./images/songs/nu_hong_mong_manh.png",
        audio: "./audio/nu_hong_mong_manh.mp3",
        top: true
    },
    {
        id: 9,
        order: "09",
        name: "Ai chung tình được mãi",
        author: "Thương võ",
        img: "./images/songs/ai_chung_tinh_duoc_mai.png",
        audio: "./audio/ai_chung_tinh_duoc_mai.mp3",
        top: true
    },
    {
        id: 10,
        order: "10",
        name: "Tương tư nàng ca sĩ",
        author: "Thương võ",
        img: "./images/songs/tuong_tu_nang_ca_si.png",
        audio: "./audio/tuong_tu_nang_ca_si.mp3",
        top: true
    },
    {
        id: 11,
        order: "11",
        name: "Em nào có tội",
        author: "Thương võ",
        img: "./images/songs/em_nao_co_toi.png",
        audio: "./audio/em_nao_co_toi.mp3",
        top: false
    },
    {
        id: 12,
        order: "12",
        name: "Hơn cả mây",
        author: "Việt",
        img: "./images/songs/hon_ca_may.png",
        audio: "./audio/hon_ca_may.mp3",
        top: false
    },
    {
        id: 13,
        order: "13",
        name: "Hẹn em kiếp sau",
        author: "Duy phúc",
        img: "./images/songs/hen_em_kiep_sau.png",
        audio: "./audio/hen_em_kiep_sau.mp3",
        top: false
    },
    {
        id: 14,
        order: "14",
        name: "Người có thương",
        author: "DatKaa",
        img: "./images/songs/nguoi_co_thuong.png",
        audio: "./audio/nguoi_co_thuong.mp3",
        top: false
    },
    {
        id: 15,
        order: "15",
        name: "Ngỡ như là giấc mơ",
        author: "Chu Duyên",
        img: "./images/songs/ngo_nhu_la_giac_mo.png",
        audio: "./audio/ngo_nhu_la_giac_mo.mp3",
        top: false
    },
    {
        id: 16,
        order: "16",
        name: "Sao em vô tình",
        author: "Jack",
        img: "./images/songs/sao_em_vo_tinh.png",
        audio: "./audio/sao_em_vo_tinh.mp3",
        top: false
    },

]

let currentSongIndex = 0;
let audioPlaying = false
let audioRandom = false
let audioRepeat = false
let repeatRandom = false

const audio = document.querySelector('.box-playing__thumb audio')
const processMusic = document.querySelector('.box-playing__thumb input')
const btnPlay = document.querySelector('.play-music')
const btnNext = document.querySelector('.next-music')
const btnPrev = document.querySelector('.prev-music')
const btnRandom = document.querySelector('.random-music')
const btnRepeat = document.querySelector('.repeat-music')
const currentTimeSong = document.querySelector('.time-song__current')
const durationTimeSong = document.querySelector('.time-song__duration')

const rotateThumbImg = document.querySelector('.box-playing__thumb img').animate(
    [
        { transform: 'rotate(0)' },
        { transform: 'rotate(360deg)' }
    ],
    {
        duration: 10000,
        iterations: Infinity,
    }
)

start()

function start() {
    renderTopSongs()
    renderSongs()
    currentSong()
    handleEvents()
}


function renderSongs() {
    // render các bài hát có trong danh sách
    const html = songs.map(song => {
        return `
        <div class="box-played__item">
            <div class="box-played__item__song">
                <p class="order-song">${song.order}</p>
                <img class="img-song" src="${song.img}">
                <div class="status-song status-song-${song.id}">
                    <i class='bx bx-play'></i>
                    <img src="./images/music_playing.gif">
                </div>
                <p class="name-song">${song.name}</p>
                <p class="author-song">${song.author}</p>
            </div>
            <div class="box-played__item__song__more">
                <i class='bx bx-dots-horizontal-rounded'></i>
            </div>
        </div>
        `
    })
    document.querySelector('.box-played').innerHTML = html.join('')
}

function renderTopSongs() {
    let html = songs.map(song => {
        if (song.top) return `
        <div class="browse__top-songs__item" id="${song.id}">
            <div class="img" style="background: url(${song.img}) center center /100% no-repeat"></div>
            <h3>${song.name}</h3>
            <p>${song.author}</p>
        </div>
        `
        else return ''
    })
    document.querySelector('.browse__top-songs__wrap').innerHTML = html.join('')
}

function renderSearchedSongs(newSongs) {
    let html
    if (newSongs.length > 0) html = newSongs.map(newSong => {
        return `
        <div class="searched__item" id='searched-${newSong.id}'>
        <div class="searched__item__song">
            <img class="img-song" src="${newSong.img}">
            <p class="name-song">${newSong.name}</p>
            <p class="author-song">${newSong.author}</p>
        </div>
        </div>
        `

    })
    else html = [`<div class="not-song">Không có dữ liệu nào được tìm kiếm</div>`]
    document.querySelector('.searched').innerHTML = html.join('')
}

function currentSong() {
    let song = songs[currentSongIndex]
    document.querySelector('.box-playing__thumb audio').src = song.audio
    document.querySelector('.box-playing__thumb img').src = song.img
    document.querySelector('.box-playing__thumb h4').innerText = song.name
    document.querySelector('.box-playing__thumb p').innerText = song.author
}

function playNewSong() {
    rotateThumbImg.currentTime = 0
    currentSong()
    document.querySelectorAll('.status-song').forEach(e => {
        e.classList.remove('playing')
    });
    audio.play()
}

let cacheRandom = []
function randomSong() {
    let randomSongIndex = -1

    do {
        randomSongIndex = Math.floor(Math.random() * songs.length)
    } while (randomSongIndex == currentSongIndex || cacheRandom.includes(randomSongIndex))

    if (cacheRandom.length == songs.length - 1) cacheRandom = []
    else cacheRandom.push(randomSongIndex)

    return randomSongIndex
}

function animateScoll(topBoxPlayed){
    let timeScroll = (Math.abs(topBoxPlayed - document.querySelector('.box-played').scrollTop) / 0.5)
    $('.box-played').animate({
        scrollTop: topBoxPlayed
    }, timeScroll)
}

function handleEvents() {

    rotateThumbImg.pause()

    // Bắt sự kiện nút play music
    btnPlay.onclick = function () {
        if (!audioPlaying) audio.play()
        else audio.pause()
    }

    // Bắt sự kiện khi nhạc đang chạy
    audio.onplay = function () {
        audioPlaying = true
        rotateThumbImg.play()
        btnPlay.classList.add('playing')
        document.querySelector('.status-song-' + (currentSongIndex + 1)).classList.add('playing')
    }

    // Bắt sự kiện khi nhạc dừng
    audio.onpause = function () {
        audioPlaying = false
        rotateThumbImg.pause()
        btnPlay.classList.remove('playing')
        document.querySelector('.status-song-' + (currentSongIndex + 1)).classList.remove('playing')
    }

    // Bắt sự kiện khi thay đổi vị trí hiện tại
    audio.ontimeupdate = function () {
        if (audio.duration) processMusic.value = audio.currentTime / audio.duration * 100
        currentTimeSong.innerText = convertTime(Math.floor(audio.currentTime))

    }

    // Bắt sự tổng thời lượng bài hát được thay đổi
    audio.ondurationchange = function () {
        durationTimeSong.innerText = convertTime(Math.floor(audio.duration))
    }

    // Bắt sự kiện khi bài hát kết thúc
    audio.onended = function () {
        setTimeout(() => {
            if (audioRandom && !audioRepeat) currentSongIndex = randomSong()
            else if (!audioRandom && !audioRepeat) {
                currentSongIndex++
                if (currentSongIndex == songs.length) currentSongIndex = 0
            }
            playNewSong()
            animateScoll(currentSongIndex * 60)
        }, 3000)
    }

    // Bắt sự khiên khi thành input thay đổi value (tua)
    processMusic.oninput = function () {
        audio.currentTime = processMusic.value * audio.duration / 100
    }

    // Bắt sự kiện next
    btnNext.onclick = function () {
        if (audioRandom) currentSongIndex = randomSong()
        else {
            currentSongIndex++
            if (currentSongIndex == songs.length) currentSongIndex = 0
        }
        playNewSong()
        animateScoll(currentSongIndex * 60)
    }

    // Bắt sự kiện prev
    btnPrev.onclick = function () {
        if (audioRandom) currentSongIndex = randomSong()
        else {
            currentSongIndex--
            if (currentSongIndex == -1) currentSongIndex = songs.length - 1
        }
        playNewSong()
        animateScoll(currentSongIndex * 60)
    }

    // Thay đổi bài hát tương ứng khi được chọn
    const itemSongs = document.querySelectorAll('.box-played__item__song')
    itemSongs.forEach((element, index) => {
        element.onclick = function () {
            currentSongIndex = index
            playNewSong()
        }
    })

    const itemTopSongs = document.querySelectorAll('.browse__top-songs__item')
    itemTopSongs.forEach(element => {
        element.onclick = function (e) {
            e.stopPropagation()
            currentSongIndex = element.id - 1;
            playNewSong()
            animateScoll(Number(element.id - 1) * 60)
        }
    })

    // Bắt sự kiện random
    btnRandom.onclick = function () {
        this.classList.toggle("active")
        if (this.classList.contains('active')) audioRandom = true
        else audioRandom = false
        cacheRandom = [currentSongIndex]
    }

    // Bắt sự kiện repeat
    btnRepeat.onclick = function () {
        this.classList.toggle("active")
        if (this.classList.contains('active')) audioRepeat = true
        else audioRepeat = false
    }

    // Bắt sự kiện nhấn phím trên keyboard
    document.body.onkeydown = function (e) {
        console.log(e.code);
        if (e.code == 'Space') {
            if (!audioPlaying) audio.play()
            else audio.pause()
        }
    }

    document.querySelector('.browse__header input').onkeydown = function (e) {
        e.stopPropagation()
    }

    // Bắt sự kiện tìm kiếm
    document.querySelector('.browse__header input').oninput = function () {
        const _this = this

        if (this.value.trim() == '') {
            $('.searched').removeClass("show")
            return
        }

        let newSongs = songs.filter(song => {
            return song.name.toLowerCase().includes(this.value.trim().toLowerCase()) || song.author.toLowerCase().includes(this.value.trim().toLowerCase())
        })
        renderSearchedSongs(newSongs)

        const itemSearchedSongs = document.querySelectorAll('.searched__item')
        itemSearchedSongs.forEach(element => {
            element.onclick = function () {
                currentSongIndex = element.id.replace('searched-', '') - 1
                playNewSong()
                $('.searched').removeClass("show")
                _this.value = ''

                animateScoll(Number(element.id.replace('searched-', '') - 1) * 60)
                document.documentElement.scrollTop = $(document).height() - $(window).height();
            }
        })

        $('.searched').addClass("show")
    }

}

function convertTime(second) {
    let minute = Math.floor(second / 60)
    let hasConvert
    if (second < minute * 60 + 10) hasConvert = `${minute}:0` + (second - minute * 60)
    if (second >= minute * 60 + 10) hasConvert = `${minute}:` + (second - minute * 60)

    return hasConvert
}

document.querySelectorAll('.img').forEach(e => {
    e.onmouseenter = function () {
        this.style.backgroundSize = '110%'
        this.style.transition = 'all 0.5s'
    }
    e.onmouseleave = function () {
        this.style.backgroundSize = '100%'
        this.style.transition = 'all 0.5s'
    }
})


$('.browse__top-songs__wrap').slick({
    arrows: true,
    dots: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    prevArrow: `<div class='slick-prev'><i class='bx bx-left-arrow-alt' ></i></div>`,
    nextArrow: `<div class='slick-next'><i class='bx bx-right-arrow-alt' ></i></div>`,

})

document.querySelector(".menu-icon").onclick = function () {
    document.querySelector('.nav').classList.add('show')
    document.querySelector('.overlay').classList.add('show')
}

document.querySelector(".overlay").onclick = function () {
    document.querySelector('.nav').classList.remove('show')
    document.querySelector('.overlay').classList.remove('show')
}