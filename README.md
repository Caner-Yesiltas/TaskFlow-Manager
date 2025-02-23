
<div align="center">
 <h1> 
# TaskFlow Manager 📝
 </h1>
</div>

<div align="center">
  <h2>
    👉 <a href="https://task-flow-manager.vercel.app/">Live Demo</a> 👈
  </h2>
</div>

<div align="center">
  <img src="./assets/demo.gif" alt="TaskFlow Manager Demo" width="800"/>
</div>

## 📌 About The Project

TaskFlow Manager is a modern task management application built with React and Bootstrap. It helps users organize their daily tasks with a clean, intuitive interface.

### ✨ Key Features

- ➕ Create new tasks with unique UUIDs
- ✅ Mark tasks as complete/incomplete with double-click
- 🗑️ Delete tasks instantly
- 💾 Persistent storage using localStorage
- 🎨 Clean and responsive Bootstrap design
- ❄️ Daily task list with winter theme (☃️)

### 🛠️ Built With

- [React](https://reactjs.org/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [UUID](https://github.com/uuidjs/uuid)
- LocalStorage API
- CSS3

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/caneryesiltas/task-flow-manager.git

# Navigate to project directory
cd task-flow-manager

# Install dependencies
npm install

# Start the development server
npm start
```

## 💻 Project Structure

```
src/
├── components/
│   ├── Header.js    # Task input and addition
│   └── TodoList.js  # Task display and management
├── styles/
│   └── App.css
└── App.js          # Main application logic
```

## 🔍 Core Functionality

- **Task Addition**: Users can add new tasks with automatic UUID generation
- **Task Toggle**: Double-click to toggle task completion status
- **Task Deletion**: Remove tasks with a single click on the trash icon
- **Data Persistence**: Tasks are saved in localStorage
- **Input Validation**: Empty tasks are prevented with input validation

## 🎯 Component Details

### Header Component
- Task input field with Bootstrap styling
- Disabled button state for empty inputs
- Clean and centered design

### TodoList Component
- Responsive list layout
- Visual completion indicators
- Interactive delete buttons
- Winter-themed heading (☃️)

## 📱 Responsive Design

- Centered content layout
- Mobile-friendly interface
- Bootstrap grid system
- Adaptive input group sizing

## 🤝 Contributing

Contributions make the open source community an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📫 Contact

Caner Yesiltas - caneryesiltas1@gmail.com

Project Link: [https://task-flow-manager.vercel.app/](https://task-flow-manager.vercel.app/)

---

<div align="center">
  Made with 📝 by Caner Yesiltas
</div>
