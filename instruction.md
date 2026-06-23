# คู่มือการทำ Profile Page พร้อม AI Chatbot 🚀

## 📖 สิ่งที่คุณจะได้เรียนรู้
- การสร้างเว็บไซต์แสดงประวัติส่วนตัว
- การเชื่อมต่อกับ AI Chatbot
- การปรับแต่งหน้าตาเว็บไซต์
- การเข้าใจโครงสร้างของ Next.js

---

## 🎯 ภาพรวมโปรเจค
โปรเจคนี้เป็นเว็บไซต์ส่วนตัวที่สร้างด้วย **Next.js** (เฟรมเวิร์กของ React) และมี AI Chatbot ที่สามารถตอบคำถามเกี่ยวกับคุณได้

### 🛠️ เทคโนโลยีที่ใช้:
- **Next.js** - เฟรมเวิร์กสำหรับสร้างเว็บไซต์
- **TypeScript** - ภาษาที่ปรับปรุงจาก JavaScript
- **Tailwind CSS** - ไลบรารีสำหรับจัดแต่งหน้าตา
- **Google Gemini AI** - AI สำหรับ Chatbot

---

## 📁 โครงสร้างไฟล์และหน้าที่

### 📄 ไฟล์หลัก (Root Files)
```
📄 package.json           # รายการ library และคำสั่งต่างๆ
📄 next.config.js         # ตั้งค่า Next.js
📄 tailwind.config.js     # ตั้งค่าสีและรูปแบบ
📄 tsconfig.json          # ตั้งค่า TypeScript
📄 .env.local             # เก็บ API Key (ต้องสร้างเอง)
```

**💡 เคล็ดลับ:** ไฟล์เหล่านี้เปรียบเหมือน "ใบสั่งอาหาร" ที่บอกว่าเว็บไซต์จะต้องใช้อะไรบ้าง

### 📁 โฟลเดอร์ app/ (หน้าเว็บไซต์)
```
📁 app/
  📄 page.tsx             # หน้าแรก (Home Page)
  📄 layout.tsx           # โครงร่างพื้นฐานของทุกหน้า
  📄 globals.css          # สไตล์ CSS ทั่วไป
  
  📁 api/
    📁 chat/
      📄 route.ts         # ตัวจัดการคำขอ API สำหรับแชท
  
  📁 chat/
    📄 page.tsx           # หน้าแชทกับ AI
```

**💡 สิ่งที่ต้องรู้:**
- `page.tsx` = หน้าเว็บที่ผู้ใช้เห็น
- `route.ts` = ตัวจัดการข้อมูลเบื้องหลัง
- เมื่อผู้ใช้เข้า `/chat` จะเห็น `app/chat/page.tsx`

### 📁 โฟลเดอร์ components/ (ชิ้นส่วนเว็บไซต์)
```
📁 components/
  📄 ProfileCard.tsx      # การ์ดแสดงข้อมูลส่วนตัว
  📄 ChatSection.tsx      # ส่วนแสดงตัวอย่างการแชท
  📄 Hero.tsx             # ส่วนหัวของเว็บไซต์
  📄 About.tsx            # ส่วนเกี่ยวกับ
  📄 Contact.tsx          # ส่วนติดต่อ
```

**💡 เปรียบเทียบ:** Component เหมือนเลโก้ที่เราประกอบกันเป็นเว็บไซต์

---

## 🔧 การปรับแต่งข้อมูลส่วนตัว (Step by Step)

### ขั้นตอนที่ 1: แก้ไขข้อมูล AI Database

**ไฟล์:** `app/api/chat/route.ts`

หาส่วนนี้ในไฟล์:
```typescript
const userData = {
  name: "",                    // ← เปลี่ยนเป็นชื่อเล่น
  fullName: "",               // ← เปลี่ยนเป็นชื่อเต็ม
  role: "",                   // ← เปลี่ยนเป็นอาชีพ/ตำแหน่ง
  skills: [                   // ← เปลี่ยนเป็นความสามารถของคุณ
    " ", " ", " ", " ", " ", 
  ],
  education: [                // ← ข้อมูลการศึกษา
    {
      school: " ",            // ← ชื่อโรงเรียน/มหาวิทยาลัย
      degree: " ",            // ← วุฒิการศึกษา
      period: " ",            // ← ช่วงเวลา เช่น "2020-2024"
      description: " "        // ← รายละเอียดเพิ่มเติม
    },
  ],
  interests: [" ", " ", " ", " "], // ← ความสนใจ
  contact: {
    email: "your.email@example.com", // ← อีเมลจริง
    // ... ข้อมูลอื่นๆ
  }
};
```

**🎯 ตัวอย่างการกรอก:**
```typescript
const userData = {
  name: "มิกกี้",
  fullName: "นายมิกกี้ เมาส์",
  role: "นักเรียน คณะวิศวกรรม",
  skills: [
    "Python", "React", "Figma", "Adobe Photoshop", "การถ่ายภาพ"
  ],
  education: [
    {
      school: "มหาวิทยาลัยกรุงเทพ",
      degree: "วิศวกรรมศาสตรบัณฑิต สาขาวิศวกรรมคอมพิวเตอร์",
      period: "2021-2025",
      description: "เรียนเก่ง GPA 3.75 ได้ทุนการศึกษา"
    },
  ],
  interests: ["เขียนโปรแกรม", "เล่นเกม", "ดูหนัง", "ท่องเทียว"],
  contact: {
    email: "mickey.mouse@gmail.com",
  }
};
```

### ขั้นตอนที่ 2: แก้ไขหน้าจอที่ผู้ใช้เห็น

**ไฟล์:** `components/ProfileCard.tsx`

**2.1 แก้ไขชื่อและตำแหน่ง:**
หาส่วนนี้:
```tsx
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
    Alex Johnson  {/* ← เปลี่ยนเป็นชื่อคุณ */}
</h1>
<div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm sm:text-base border border-blue-400/30  mb-1">
    Full Stack Developer  {/* ← เปลี่ยนเป็นตำแหน่งคุณ */}
</div>
```

**2.2 แก้ไขข้อมูลติดต่อ:**
หาส่วนอีเมล:
```tsx
<p className="text-white font-medium text-sm sm:text-base">alex.johnson@example.com</p>
```
เปลี่ยนเป็นอีเมลของคุณ

หาส่วนเบอร์โทร:
```tsx
<p className="text-white font-medium text-sm sm:text-base">+66 (098) 123-4567</p>
```
เปลี่ยนเป็นเบอร์ของคุณ

**2.3 แก้ไขคำอธิบายตัว:**
หาส่วนนี้:
```tsx
<p className="text-gray-300 text-sm sm:text-base leading-relaxed">
    Passionate about creating innovative digital solutions... {/* เปลี่ยนเป็นคำแนะนำตัว */}
</p>
```

### ขั้นตอนที่ 3: แก้ไข Social Media Links

ในไฟล์ `components/ProfileCard.tsx` หาส่วน `socialLinks`:

```tsx
const socialLinks = [
    {
        name: 'Email',
        href: 'mailto:alex.johnson@example.com', // ← เปลี่ยนอีเมล
        // ... ไอคอน
    },
    {
        name: 'GitHub',
        href: 'https://github.com/alexjohnson', // ← เปลี่ยน username
        // ... ไอคอน
    },
    // ... LinkedIn, Twitter ฯลฯ
];
```

---

## 🤖 การตั้งค่า AI Chatbot

### ขั้นตอนที่ 1: รับ API Key

1. **เข้าไปที่:** [Google AI Studio](https://aistudio.google.com/)
2. **สมัครบัญชี** Google (ถ้ายังไม่มี)
3. **สร้าง API Key** ใหม่
4. **คัดลอก** API Key ที่ได้

### ขั้นตอนที่ 2: สร้างไฟล์ .env.local

ในโฟลเดอร์หลักของโปรเจค สร้างไฟล์ใหม่ชื่อ `.env.local`:

```
GEMINI_API_KEY=your_api_key_here
```

**⚠️ คำเตือน:** ห้ามแชร์ API Key กับใครเด็ดขาด!

### ขั้นตอนที่ 3: ปรับแต่งบุคลิกภาพ AI

ในไฟล์ `app/api/chat/route.ts` หาส่วน `systemPrompt`:

```typescript
const systemPrompt = `Your Name is "มิกกี้ AI", You are my personal AI assistant...

คุณต้อง:
1. ตอบเป็นภาษาไทยเสมอ (ยกเว้นถ้าถูกขอให้ตอบภาษาอังกฤษ)
2. เป็นมิตร ใจดี และช่วยเหลือ
3. ใช้ข้อมูลใน userData เพื่อตอบคำถาม
4. ใช้อิโมจิให้น่ารัก 😊

บุคลิก: ร่าเริง มีอารมณ์ขัน และชอบช่วยเหลือ
`;
```

---

## 🎨 การปรับแต่งหน้าตาเว็บไซต์

### การเปลี่ยนสีธีม

Tailwind CSS ใช้ระบบสีแบบนี้:
```
bg-blue-500    → พื้นหลังสีน้ำเงิน
text-red-400   → ตัวอักษรสีแดง
border-green-300 → ขอบสีเขียว
```

**🌈 สีที่ใช้ได้:**
- `red` (แดง)
- `blue` (น้ำเงิน) 
- `green` (เขียว)
- `purple` (ม่วง)
- `pink` (ชมพู)
- `yellow` (เหลือง)
- `gray` (เทา)

**📊 ระดับความเข้ม:** 100 (อ่อน) ถึง 900 (เข้ม)

**ตัวอย่างการเปลี่ยน:**
```tsx
// เดิม
<div className="bg-blue-500 text-white">

// เปลี่ยนเป็น
<div className="bg-purple-500 text-white">
```

### การเปลี่ยน Gradient (ไล่สี)

```tsx
// เดิม
<div className="bg-gradient-to-br from-blue-500 to-purple-600">

// เปลี่ยนเป็น
<div className="bg-gradient-to-br from-pink-500 to-orange-600">
```

---

## 🚀 วิธีการรันโปรเจค

### ขั้นตอนที่ 1: เปิด Terminal/Command Prompt

**Windows:**
- กด `Windows + R`
- พิมพ์ `cmd` หรือ `powershell`
- กด Enter

**Mac:**
- กด `Cmd + Space`
- พิมพ์ `Terminal`
- กด Enter

### ขั้นตอนที่ 2: ไปยังโฟลเดอร์โปรเจค

```bash
cd c:\Github\profile-page-with-chat
```

### ขั้นตอนที่ 3: ติดตั้ง Dependencies

```bash
npm install
```

**💡 อธิบาย:** คำสั่งนี้จะติดตั้งไลบรารีทั้งหมดที่โปรเจคต้องการ

### ขั้นตอนที่ 4: รันโปรเจค

```bash
npm run dev
```

### ขั้นตอนที่ 5: เปิดเบราว์เซอร์

ไปที่ `http://localhost:3000`

**🎉 เสร็จแล้ว!** เว็บไซต์จะเปิดขึ้นมา

---

## 📱 คู่มือการใช้งาน

### หน้าแรก (/)
- แสดงข้อมูลส่วนตัว
- มีปุ่มไปหน้าแชท
- แสดงข้อมูลติดต่อ

### หน้าแชท (/chat)
- พิมพ์คำถามได้
- AI จะตอบโดยใช้ข้อมูลที่ตั้งค่าไว้
- สามารถถามเกี่ยวกับการศึกษา ความสามารถ ฯลฯ

---

## 🔍 การแก้ปัญหาที่พบบ่อย

### ❌ ปัญหา: AI ไม่ตอบ
**✅ วิธีแก้:**
1. ตรวจสอบ API Key ในไฟล์ `.env.local`
2. ตรวจสอบว่า API Key ยังใช้งานได้
3. ดู Console ในเบราว์เซอร์ (F12)

### ❌ ปัญหา: หน้าเว็บไม่แสดง
**✅ วิธีแก้:**
1. กด F12 ดู Console มี error อะไร
2. ตรวจสอบ syntax ในไฟล์ที่แก้ไข
3. รีสตาร์ท server (`Ctrl+C` แล้ว `npm run dev`)

### ❌ ปัญหา: สีไม่เปลี่ยน
**✅ วิธีแก้:**
1. ตรวจสอบชื่อ class Tailwind ให้ถูกต้อง
2. ล้าง cache เบราว์เซอร์ (`Ctrl+F5`)

### ❌ ปัญหา: ข้อมูลไม่อัพเดท
**✅ วิธีแก้:**
1. ตรวจสอบว่าแก้ไขในไฟล์ที่ถูกต้อง
2. Save ไฟล์ (`Ctrl+S`)
3. รีเฟรชเบราว์เซอร์ (`F5`)

---

## 📚 เรียนรู้เพิ่มเติม

### 🎯 ความรู้พื้นฐานที่ควรรู้

**HTML:** โครงสร้างเว็บไซต์
```html
<div>  ← กล่องใส่เนื้อหา
<h1>   ← หัวข้อใหญ่
<p>    ← ย่อหน้าข้อความ
<img>  ← รูปภาพ
```

**CSS:** การจัดแต่งหน้าตา
```css
color: red;      ← สีตัวอักษร
background: blue; ← สีพื้นหลัง
font-size: 20px;  ← ขนาดตัวอักษร
```

**JavaScript:** การทำงานของเว็บไซต์
```javascript
const name = "มิกกี้";  ← ตัวแปร
function sayHello() {   ← ฟังก์ชัน
  alert("สวัสดี!");
}
```

### 🔗 ลิงก์ที่มีประโยชน์

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Cheat Sheet](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

---

## 🛠️ ขั้นตอนการพัฒนาต่อ (Advanced)

### 1. เพิ่มหน้าใหม่
สร้างไฟล์ `app/about/page.tsx`:
```tsx
export default function About() {
  return (
    <div>
      <h1>เกี่ยวกับฉัน</h1>
      <p>ใส่เนื้อหาที่นี่</p>
    </div>
  );
}
```

### 2. เพิ่ม Component ใหม่
สร้างไฟล์ `components/Skills.tsx`:
```tsx
export default function Skills() {
  const skills = ["React", "TypeScript", "Python"];
  
  return (
    <div>
      <h2>ความสามารถ</h2>
      {skills.map(skill => (
        <span key={skill}>{skill}</span>
      ))}
    </div>
  );
}
```

### 3. เชื่อมต่อฐานข้อมูล
- ใช้ PostgreSQL กับ Prisma
- ใช้ MongoDB กับ Mongoose
- ใช้ Firebase

---

## 🎉 ยินดีด้วย!

คุณได้เรียนรู้:
- ✅ การสร้างเว็บไซต์ด้วย Next.js
- ✅ การใช้งาน AI Chatbot
- ✅ การปรับแต่งหน้าตาด้วย Tailwind CSS
- ✅ การจัดการไฟล์และโครงสร้างโปรเจค
- ✅ การแก้ปัญหาเบื้องต้น

**🚀 ขั้นตอนต่อไป:**
1. ลองปรับแต่งสีและรูปแบบ
2. เพิ่มเนื้อหาและรูปภาพ
3. เรียนรู้ React และ JavaScript เพิ่มเติม
4. ศึกษาการ Deploy เว็บไซต์ออนไลน์

**💪 จำไว้:** การเรียนรู้เขียนโปรแกรมต้องอาศัยการฝึกฝน ไม่ต้องกลัวผิดพลาด ลองผิดลองถูกไปเรื่อยๆ แล้วคุณจะเก่งขึ้นเอง!

---

*สร้างด้วย ❤️ สำหรับผู้ที่อยากเรียนรู้การเขียนโปรแกรม*