import '/scss/blog.scss';

//components

import { useTheme } from './components/theme.js';
import { useBlogSlider } from './components/blog/slider.js';
import { useTabTrigger } from './components/blog/slider.js';
import { useArticlesSlider } from './components/blog/slider.js';
import { useBurger } from './components/burger.js';

useTheme();
useBlogSlider();
useTabTrigger();
useArticlesSlider();
useBurger();
