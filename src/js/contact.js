import '/scss/contact.scss';

//components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { useMail } from './components/contact/mail.js';

useTheme();
useBurger();
usePhone();
useMail();
