import "@/styles/tailwind.css";
import DefaultLayout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout ?? DefaultLayout;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
/**const Layout = Component.Layout ?? DefaultLayout;：

这一行代码定义了一个名为 Layout 的变量，它根据传递给页面组件的 Component 的 Layout 属性或者默认布局组件 DefaultLayout 来确定布局组件。如果页面组件定义了 Layout 属性，则使用该属性所指定的布局组件；否则，使用默认布局组件。

"??" 是一个在一些编程语言中用来表示空值合并操作符（Nullish Coalescing Operator）。
const result = value !== null && value !== undefined ? value : defaultValue;
而使用 ?? 运算符可以更简洁地表达相同的逻辑：
const result = value ?? defaultValue;
这意味着，如果 value 的值为 null 或者 undefined，那么 result 将会取 defaultValue 的值；否则，result 将取 value 的值。

在许多编程语言中，有时候需要检查一个值是否为 null 或者 undefined，如果是的话，给它一个默认值。传统的方式可能会使用三元运算符（ternary operator）来实现：

*/
