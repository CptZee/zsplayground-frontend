import { Button, ConfigProvider } from "antd";

const ModifiedButton = ({ type = 'submit', className, ...props }) => (
    <Button
        htmlType={type}
        className={`${className} no-hover inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150`}
        {...props}
    />
);

export default ModifiedButton;