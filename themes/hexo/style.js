/* eslint-disable react/no-unknown-property */
import { siteConfig } from '@/lib/config'
import CONFIG from './config'

const Style = () => {
  // 建议更换为更鲜明高级的颜色，如 #7C5CFC 或 #6366F1
  const themeColor = siteConfig('HEXO_THEME_COLOR', '#928CEE', CONFIG)

  return (
    <style jsx global>{`
      :root {
        --theme-color: ${themeColor};
        /* 新增辅助透明度变量，用于平滑过渡 */
        --theme-color-light: color-mix(in srgb, var(--theme-color) 20%, transparent);
        --theme-color-mid: color-mix(in srgb, var(--theme-color) 40%, transparent);
      }

      #theme-hexo body {
        background-color: #f5f5f5;
        transition: background-color 0.3s ease;
      }
      .dark #theme-hexo body {
        background-color: #18181b; /* 深色模式不用纯黑，用一点深灰，更护眼 */
        transition: background-color 0.3s ease;
      }

      /* --- 1. 菜单下划线动画 --- */
      #theme-hexo .menu-link {
        text-decoration: none;
        background-image: linear-gradient(var(--theme-color), var(--theme-color));
        background-repeat: no-repeat;
        background-position: bottom left; /* 从左侧开始划出 */
        background-size: 0 2px;
        transition: background-size 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        padding-bottom: 2px;
      }
      #theme-hexo .menu-link:hover {
        background-size: 100% 2px;
        color: var(--theme-color);
      }

      /* --- 2. 全局悬浮与交互颜色（替换大量 !important） --- */
      #theme-hexo h2:hover .menu-link,
      #theme-hexo #nav div[class*='hover:text-indigo-600']:hover,
      #theme-hexo div[class*='hover:text-indigo-600']:hover,
      #theme-hexo div[class*='hover:text-indigo-400']:hover,
      #theme-hexo .text-indigo-400,
      .dark #theme-hexo .dark\:text-indigo-400,
      #theme-hexo a[class*='hover:text-indigo-800']:hover {
        color: var(--theme-color) !important;
      }

      #theme-hexo .border-indigo-400,
      #theme-hexo .border-indigo-800,
      #theme-hexo .border-indigo-500,
      #theme-hexo li[class*='hover:border-indigo-500']:hover,
      .dark #theme-hexo .dark\:border-indigo-400,
      .dark #theme-hexo .dark\:border-white {
        border-color: var(--theme-color) !important;
      }

      #theme-hexo .bg-indigo-400,
      #theme-hexo .bg-indigo-500,
      #theme-hexo .bg-indigo-600,
      #theme-hexo div[class*='hover:bg-indigo-400']:hover,
      #theme-hexo a[class*='hover:bg-indigo-400']:hover,
      #theme-hexo a[class*='hover:bg-indigo-600']:hover,
      #theme-hexo li[class*='hover:bg-indigo-500']:hover,
      #theme-hexo .hover\:bg-indigo-400:hover,
      #theme-hexo .hover\:bg-blue-600:hover,
      .dark #theme-hexo .dark\:bg-indigo-500,
      .dark #theme-hexo li[class*='dark:hover:border-indigo-300']:hover {
        background-color: var(--theme-color) !important;
        color: white !important;
      }

      /* --- 3. 选中字体（Selection）--- */
      ::selection {
        /* 使用主色 30% 透明度，看起来更通透，不抢眼 */
        background: var(--theme-color-mid);
        color: inherit; 
      }

      /* --- 4. 顶部 Banner 渐变遮罩优化 --- */
      #theme-hexo .header-cover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none; /* 防止遮罩层阻挡下方元素的点击 */
        background: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0.2) 15%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0.1) 70%,
          rgba(0, 0, 0, 0.5) 100%
        );
        transition: background 0.3s ease;
      }

      /* --- 5. 自定义滚动条（圆润现代化） --- */
      ::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
      ::-webkit-scrollbar-track {
        background: transparent;
      }
      ::-webkit-scrollbar-thumb {
        background-color: var(--theme-color-mid); /* 用半透明色 */
        border-radius: 12px; /* 圆润滚动条 */
        transition: background-color 0.2s;
      }
      ::-webkit-scrollbar-thumb:hover {
        background-color: var(--theme-color);
      }
      * {
        scrollbar-width: thin;
        scrollbar-color: var(--theme-color-mid) transparent;
      }

      /* --- 6. 深色模式下目录项修复 --- */
      .dark #theme-hexo .catalog-item {
        color: #e5e7eb !important;
        border-color: #374151 !important;
        transition: all 0.2s ease;
      }
      .dark #theme-hexo .catalog-item:hover {
        color: var(--theme-color) !important;
        border-color: var(--theme-color) !important;
      }
      .dark #theme-hexo .catalog-item.font-bold {
        border-color: var(--theme-color) !important;
      }
    `}</style>
  )
}

export { Style }
