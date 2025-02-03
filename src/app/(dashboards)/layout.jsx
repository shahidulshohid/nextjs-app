
const dashboardLayout = ({children}) => {
    return (
        <div>
           <div className="grid grid-cols-12">
            {/* side nav  */}
            <div className="col-span-3">user list</div>
            {/* dashboard content  */}
            <div className="col-span-9">{children}</div>
           </div>
        </div>
    );
};

export default dashboardLayout;