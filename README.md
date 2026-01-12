# 🇨🇳 Chinese Mastery Hub

Công cụ học tiếng Trung toàn diện, tập trung vào Nghe & Nói, được hỗ trợ bởi AI.

## ✨ Tính năng

- 📚 Giải thích từ vựng / ngữ pháp chi tiết
- 💡 Tạo ví dụ theo ngữ cảnh
- ✍️ Bài tập điền từ & trắc nghiệm
- 🎧 Bài tập nghe & điền từ
- 📖 Bài đọc (Pinyin) & câu hỏi
- 🗣️ Bài nghe & câu hỏi
- 💬 Tạo đoạn hội thoại
- 🤖 Mô phỏng hội thoại với AI
- 🎙️ Luyện phản xạ nói với AI
- Và nhiều tính năng khác...

## 🚀 Hướng dẫn sử dụng

### Bước 1: Clone repository

```bash
git clone https://github.com/ThangKaito26/ChinesMasteryHub.git
cd ChinesMasteryHub
```

### Bước 2: Tạo file cấu hình API

1. Sao chép file mẫu:

**Windows (PowerShell):**
```powershell
Copy-Item config.example.js config.js
```

**Mac/Linux:**
```bash
cp config.example.js config.js
```

2. Mở file `config.js` bằng editor yêu thích (VS Code, Notepad++, v.v.)

3. Thay thế `YOUR_OPENROUTER_API_KEY_HERE` bằng API key của bạn:

```javascript
window.CONFIG = {
    OPENROUTER_API_KEY: 'sk-or-v1-your-actual-api-key-here',
    API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL: 'openai/gpt-4o-mini-2024-07-18'
};
```

### Bước 3: Lấy API Key miễn phí

1. Truy cập: [https://openrouter.ai/keys](https://openrouter.ai/keys)
2. Đăng ký/Đăng nhập tài khoản
3. Tạo API key mới
4. Sao chép và dán vào file `config.js`

### Bước 4: Chạy ứng dụng

Mở file `index.html` bằng trình duyệt web (Chrome, Firefox, Edge, v.v.)

## 🔒 Bảo mật

- ✅ File `config.js` (chứa API key) **KHÔNG** được push lên GitHub
- ✅ File `.gitignore` đã được cấu hình để bỏ qua `config.js`
- ✅ File `config.example.js` là template công khai, không chứa key thật

## 📦 Deploy lên GitHub Pages (Tùy chọn)

### Cách 1: Sử dụng GitHub Secrets (Khuyến nghị)

1. Vào repository Settings → Secrets and variables → Actions
2. Tạo secret mới:
   - Name: `OPENROUTER_API_KEY`
   - Value: API key của bạn
3. Tạo file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Create config.js from secret
        run: |
          cat > config.js << EOF
          window.CONFIG = {
              OPENROUTER_API_KEY: '${{ secrets.OPENROUTER_API_KEY }}',
              API_URL: 'https://openrouter.ai/api/v1/chat/completions',
              MODEL: 'openai/gpt-4o-mini-2024-07-18'
          };
          EOF
      
      - name: Setup Pages
        uses: actions/configure-pages@v3
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: '.'
      
      - name: Deploy to GitHub Pages
        uses: actions/deploy-pages@v2
```

4. Push code lên GitHub
5. Workflow sẽ tự động chạy và deploy

### Cách 2: Manual Deploy

⚠️ **Lưu ý:** Với cách này, API key sẽ bị expose trong file `config.js` trên GitHub Pages (có thể xem qua DevTools). Chỉ nên dùng cho testing.

## 🛠️ Công nghệ sử dụng

- HTML5
- JavaScript (Vanilla)
- TailwindCSS
- OpenRouter API (GPT-4o-mini)
- Web Speech API

## 📝 Cấu trúc thư mục

```
ChinesMasteryHub/
├── index.html              # File chính
├── config.js              # File cấu hình (không commit)
├── config.example.js      # Template cấu hình
├── .gitignore            # Git ignore rules
└── README.md             # File này
```

## ❓ Troubleshooting

### Lỗi: "Thiếu file config.js"
- Đảm bảo bạn đã tạo file `config.js` từ `config.example.js`
- Kiểm tra file `config.js` có cùng thư mục với `index.html`

### Lỗi: "Vui lòng thay thế API key"
- Mở file `config.js` và thay thế `YOUR_OPENROUTER_API_KEY_HERE` bằng key thật

### Lỗi API: 401 Unauthorized
- API key không hợp lệ hoặc đã hết hạn
- Tạo key mới tại [https://openrouter.ai/keys](https://openrouter.ai/keys)

### Lỗi API: 429 Too Many Requests
- Bạn đã vượt quá giới hạn request miễn phí
- Chờ một lúc hoặc nâng cấp tài khoản

## 📄 License

MIT License - Tự do sử dụng và chỉnh sửa

## 👤 Tác giả

ThangKaito26

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Hãy tạo Pull Request hoặc Issue nếu bạn có ý tưởng cải thiện.
