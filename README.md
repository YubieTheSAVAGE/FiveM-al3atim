# FiveM Al3atim - Shopping System

A modern FiveM resource featuring a shopping system with a beautiful NextJS UI, built with TypeScript and Tailwind CSS.

![FiveM Al3atim](https://img.shields.io/badge/FiveM-Al3atim-blue?style=for-the-badge)
![NextJS](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

- **Modern UI**: Built with NextJS 14 and TypeScript
- **Responsive Design**: Tailwind CSS for beautiful, responsive layouts
- **State Management**: Redux Toolkit for efficient state management
- **Shopping Cart**: Complete shopping cart functionality
- **Dark/Light Theme**: Next-themes for theme switching
- **FiveM Integration**: Seamless integration with FiveM client and server
- **Type Safety**: Full TypeScript support for better development experience

## 📋 Prerequisites

- FiveM Server
- Node.js 18+ (for UI development)
- npm, yarn, or pnpm

## 🛠️ Installation

### 1. FiveM Resource Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/FiveM-al3atim.git
   ```

2. Copy the `fivem/fivem-nextjs-example` folder to your FiveM server's resources directory:
   ```bash
   cp -r fivem/fivem-nextjs-example /path/to/your/fivem/server/resources/
   ```

3. Add the resource to your `server.cfg`:
   ```cfg
   ensure fivem-nextjs-example
   ```

4. Configure the resource in `config.lua`:
   ```lua
   cfg = {}
   cfg.resourceName = GetCurrentResourceName()
   cfg.cmd = "openNUI"  -- Command to open the UI
   cfg.hotkey = "H"     -- Hotkey to open the UI
   ```

### 2. UI Deployment

#### Option A: Deploy to Vercel (Recommended)

1. Fork this repository to your GitHub account
2. Go to [Vercel](https://vercel.com/new) and create a new project
3. Connect your GitHub repository
4. Set the root directory to `ui`
5. Add environment variables (if needed)
6. Deploy the project
7. Update the `ui_page` URL in `fxmanifest.lua` with your Vercel deployment URL

#### Option B: Local Development

1. Navigate to the UI directory:
   ```bash
   cd ui
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Update the `ui_page` URL in `fxmanifest.lua` to point to your local development server

## 🎮 Usage

### In-Game

- **Hotkey**: Press `H` to open the shopping interface
- **Command**: Type `/openNUI` in chat to open the interface

### Development

The UI communicates with the FiveM client through NUI callbacks. Here's how to extend the functionality:

#### Sending Data from FiveM to UI

```lua
-- client.lua
SendNUIMessage({
    type = "app/setDisplay",
    data = true
})
```

#### Receiving Data from UI in FiveM

```lua
-- client.lua
RegisterNUICallback("getPlayerCount", function(data, cb)
    TriggerServerEvent(cfg.resourceName..":getPlayerCount")
    RegisterNetEvent(cfg.resourceName..":getPlayerCount")
    AddEventHandler(cfg.resourceName..":getPlayerCount", function(count)
        cb(count)
    end)
end)
```

## 📁 Project Structure

```
FiveM-al3atim/
├── fivem/
│   └── fivem-nextjs-example/
│       ├── client.lua          # FiveM client-side logic
│       ├── server.lua          # FiveM server-side logic
│       ├── config.lua          # Configuration file
│       └── fxmanifest.lua      # FiveM resource manifest
├── ui/
│   ├── src/
│   │   ├── app/               # NextJS app directory
│   │   ├── components/        # React components
│   │   ├── context/           # React context providers
│   │   ├── state/             # Redux store and reducers
│   │   └── types/             # TypeScript type definitions
│   ├── package.json           # Node.js dependencies
│   └── tailwind.config.ts     # Tailwind CSS configuration
└── README.md                  # This file
```

## 🛠️ Technologies Used

- **Frontend**: NextJS 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Theming**: Next-themes
- **FiveM**: Lua scripting for game integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Original FiveM NextJS boilerplate by [OMikkel](https://github.com/OMikkel)
- FiveM community for inspiration and support

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/FiveM-al3atim/issues) page
2. Create a new issue with detailed information
3. Join our Discord community (if available)

---

**Note**: Make sure to update the `NEXT_PUBLIC_RESOURCE_NAME` environment variable in the UI if you rename the resource folder.

**Happy coding! 🎮**
