/**
 * Configuration File Template
 * 
 * HƯỚNG DẪN SỬ DỤNG:
 * 1. Sao chép file này thành 'config.js':
 *    - Windows: Copy-Item config.example.js config.js
 *    - Mac/Linux: cp config.example.js config.js
 * 
 * 2. Mở file 'config.js' và thay thế 'YOUR_OPENROUTER_API_KEY_HERE' 
 *    bằng API key thật của bạn
 * 
 * 3. Lấy API key miễn phí tại: https://openrouter.ai/keys
 * 
 * LƯU Ý: File 'config.js' sẽ KHÔNG được push lên GitHub (đã có trong .gitignore)
 */

window.CONFIG = {
    // Thay thế chuỗi bên dưới bằng API key của bạn
    OPENROUTER_API_KEY: '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',

    // Cấu hình API
    API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL: 'openai/gpt-4o-mini-2024-07-18'
};
