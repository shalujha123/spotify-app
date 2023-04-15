const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Bairiya",
    artist: "Shreya Ghoshal",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FBairiya%20-%20Arijit%20Singh%20128%20Kbps.mp3?alt=media&token=a1c8a427-02b2-4539-8478-57d3c508ab03",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg3.jpg?alt=media&token=a0bb9830-452e-4ed7-8234-b22dbbba0d94",
  },
  {
    id: 2,
    favourite: false,
    songName: "Alone",
    artist: "Guru Randhawa",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FAlone%20-%20Guru%20Randhawa%20128%20Kbps.mp3?alt=media&token=8bc156c9-1b79-4df2-8531-4f0804903a38",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg1.jpg?alt=media&token=ff5fcc69-41c0-40cd-a44b-56056c205c53",
  },
  {
    id: 3,
    favourite: false,
    songName: "Aye Zindagi",
    artist: "Sonu Nigam",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FAye%20Zindagi%20-%20Chalk%20N%20Duster%20128%20Kbps.mp3?alt=media&token=54b6fb0d-250e-4adc-9f82-2f8a29269cf2",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg2.jpg?alt=media&token=d734471a-f73a-4609-8277-a871f288fc84",
  },
  {
    id: 4,
    favourite: false,
    songName: "Besharam rang",
    artist: "Shilpa Rao",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FBesharam%20Rang%20-%20Pathaan%20128%20Kbps.mp3?alt=media&token=f53f081f-1ffa-40da-99ad-219c2b6e65ab",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg4.jpg?alt=media&token=4310178d-1e7e-45ce-83ef-dbfa71870a36",
  },
  {
    id: 5,
    favourite: false,
    songName: "Kesariya",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FKesariya%20-%20Brahmastra%20128%20Kbps.mp3?alt=media&token=a7386264-b76a-4e6f-bbaf-4255b17ef41a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg5.jpg?alt=media&token=0f7813cb-aa06-40f6-8510-5481221ea6f2",
  },
  {
    id: 6,
    songName: "Lashkare",
    artist: "Honey Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FLashkare%20-%20Yo%20Yo%20Honey%20Singh%20128%20Kbps.mp3?alt=media&token=bc2fa992-7678-403b-a83b-578dd0e4464f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg6.jpg?alt=media&token=dbd9dd3d-d3f8-41aa-b8a7-ea369a87a4f0",
  },
  {
    id: 7,
    favourite: false,
    songName: "Naiyo lagda",
    artist: " Himesh Reshammiya",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FNaiyo%20Lagda%20-%20Kisi%20Ka%20Bhai%20Kisi%20Ki%20Jaan%20128%20Kbps.mp3?alt=media&token=56317192-43f0-4f8f-9add-6527a760a80a",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg7.jpg?alt=media&token=321cbdd2-ad85-4474-8f5f-57ce00ed48a2",
  },
  {
    id: 8,
    favourite: false,
    songName: "Nashe se chad gyi",
    artist: "Arijit Singh",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FNashe%20Si%20Chadh%20Gayi%20-%20Befikre%20128%20Kbps.mp3?alt=media&token=ec74670d-228b-4c9e-b6ac-242071e37d5d",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg8.jpg?alt=media&token=d9d3dcf9-2d76-496c-91f1-8c75f846e542",
  },
  {
    id: 9,
    favourite: false,
    songName: "Qafira",
    artist: "Afsana Khan",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FQafira%20-%20Afsana%20Khan%20128%20Kbps.mp3?alt=media&token=ad55c754-7545-4d86-a50d-1ba9715c1b01",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg9.jpg?alt=media&token=95f86a5c-ecaf-400b-a9ae-712382df26e2",
  },
  {
    id: 10,
    favourite: false,
    songName: "Sau tarah ke",
    artist: "Jonita Gandhi",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Ringtone%2FSau%20Tarah%20Ke%20-%20Dishoom%20128%20Kbps.mp3?alt=media&token=45fd6123-96a6-4b3e-8b72-e9c8346feeea",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-31fc5.appspot.com/o/Images%2Fimg10.jpg?alt=media&token=b2722f57-7549-4beb-a40c-86118445ab6f",
  },
];

export default Songs ;
