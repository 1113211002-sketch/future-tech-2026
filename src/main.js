// 匯入樣式
import './style.scss';

// 匯入 Bootstrap JS (含 Popper)
import 'bootstrap';

// 匯入並初始化 AOS
import AOS from 'aos';

AOS.init({
  duration: 1000, // 動畫持續時間 1秒
  once: true,     // 動畫只執行一次
  offset: 100     // 觸發偏移量
});