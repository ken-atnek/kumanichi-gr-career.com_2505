declare module '*.scss';
declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'swiper/css';
declare module 'swiper/css/autoplay';
