@echo off
npm config set registry https://registry.npmjs.org/
npm install --save-dev @types/three @types/react @types/react-dom typescript @types/node
npm run build
echo Types installed. Run 'npm run dev' next.
