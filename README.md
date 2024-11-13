0. Install and use Node 14.16.0.
1. Install deps with `yarn install --ignore-scripts` (`script/install.js` in ZeroMQ fails).
2. Manually rebuild ZeroMQ with `yarn run rebuild:zeromq`.
3. Manually build Electron with `rm -r node_modules/electron && yarn add --dev electron@12.1.0` (it doesn't build since we're ignoring scripts above).
4. Run with `yarn start`.
5. Focus the devtools window. Press ctrl+F5. It will show:
```
DevTools was disconnected from the page.
Once page is reloaded, DevTools will automatically reconnect.
```
6. Above never goes away :(
7. Console in devtools window should should that we're at least trying to close the socket!
