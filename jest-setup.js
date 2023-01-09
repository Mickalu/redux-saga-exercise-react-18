import '@testing-library/jest-dom';

import { TextEncoder, TextDecoder } from 'util';
import "./src/assets/css/main.css";
import "./src/assets/css/Header.css";
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
