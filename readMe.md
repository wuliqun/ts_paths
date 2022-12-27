### run
yarn install 

<!-- and then -->

yarn dev 2022:demo1                  
yarn dev 2022:demo2

<!-- or -->

yarn build 2022:demo2


### description
`2022/demo1`  `2022/demo2` are two independent projects, they share the same build config and some other settings from outside.      
and now I want them to have there own inside relate path `@`.             
for vite, this is easy, as you can see in `viteCli/alias.js`,       
I hope typescript can recognize it.

### problem
check `ACT/2022/demo1/js/index.ts` and `ACT/2022/demo1/js/index.ts` files please.
