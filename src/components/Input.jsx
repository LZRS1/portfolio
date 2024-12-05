import './../App.css' 

function Input({type="text", ...props}){
    return(
        <input {...props} className={"w-full bg-slate-100 p-2 lg:p-1 xl:p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400 mt-1 lg:mt-0 xl:mt-1"} type={type} required />
    )
}

    function TextArea(props){
        return(
            <textarea {...props} className={"w-full h-28 lg:h-16 xl:h-28 bg-slate-100 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-pink-400 mt-2"}></textarea>
        )
    }

    function Label ({children, ...props}){
        return(
        <label {...props} className={"text-slate-600 text-sm"}>{children}</label>
        )
    }

Input.Label = Label;
Input.TextArea = TextArea;

export default Input;  