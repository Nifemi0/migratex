"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Example = Example;
const react_1 = __importDefault(require("react"));
const wagmi_1 = require("wagmi");
function Example() {
    const account = (0, wagmi_1.useAccount)();
    return <div>{String(account)}</div>;
}
//# sourceMappingURL=after.js.map