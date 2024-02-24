import React from "react";
import clsx from "clsx";

const formClasses =
  "block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm";

function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block mb-3 text-sm font-medium text-gray-700"
    >
      {children}
    </label>
  );
}

const TextField = ({ id, label, type = "text", className = "", ...props }) => {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <input id={id} type={type} {...props} className={formClasses} />
    </div>
  );
};
/**这里label如果存在的话，样式在上面function那里。所以一共涉及到三个样式 */

function SelectField({ id, label, className = "", ...props }) {
  return (
    <div className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <select id={id} {...props} className={clsx("pr-8", formClasses)} />
    </div>
  );
}

export { TextField, SelectField };
