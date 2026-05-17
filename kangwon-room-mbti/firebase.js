// =============================================
// Firebase 초기화 파일
// 설정값 변경 시 이 파일의 firebaseConfig만 수정하세요
// compat SDK v10 사용 (CDN 로드 필요)
// =============================================

const firebaseConfig = {
  apiKey:            "AIzaSyC9inMj0rgbkbc9uBoZxNaCmwvh9Cm7z7o",
  authDomain:        "kangwon-room-mbti.firebaseapp.com",
  projectId:         "kangwon-room-mbti",
  storageBucket:     "kangwon-room-mbti.firebasestorage.app",
  messagingSenderId: "914505798335",
  appId:             "1:914505798335:web:47da4a546f644d346cec0a",
  measurementId:     "G-2YXT0M9YB2"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
