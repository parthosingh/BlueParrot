

// import waterimage from '../images/Image3.png';

// function Form() {
//     const containerStyle = {
//         height: "600px",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "center",
//         gap: "100px",
//         backgroundImage: `url(${waterimage})`,
//         backgroundColor: "#5e5493",
//         backgroundSize: "cover"
//     };

//     const textContainerStyle = {
//         width: "20%",
//         marginTop: "7%",
//         color: "white",
//     };

//     const cardStyle = {
//         height: "470px",
//         borderRadius: "10px",
//         width: "25%",
//         backgroundColor: "white",
//         marginTop: "3%",
//     };

//     const cardHeaderStyle = {
//         width: "80%",
//         margin: "auto",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//     };

//     const activeTabStyle = {
//         borderTop: "2px solid black",
//         width: "50%",
//     };

//     const inactiveTabStyle = {
//         borderTop: "1px solid grey",
//         width: "50%",
//     };

//     const inputStyle = {
//         border: "1px solid grey",
//         padding: "3px 0px 3px 20px",
//         borderRadius: "50px",
//         marginBottom: "15px",
//         color: "grey",
//         textAlign: "left",
//     };

//     const dividerStyle = {
//         display: "flex",
//         flexDirection: "row",
//         alignItems: "center",
//         gap: "10px",
//     };

//     const lineStyle = {
//         borderBottom: "1px solid grey",
//         flexGrow: 1,
//     };

//     return (
//         <>
//             <h3>Form</h3>
//             <div style={containerStyle}>
//                 <div style={textContainerStyle}>
//                     <h1>
//                         We Solve digital problems with an outstanding <br/> creative flare
//                     </h1>
//                     <br/>
//                     <p>
//                         We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
//                     </p>
//                 </div>
//                 <div style={cardStyle}>
//                     <div style={cardHeaderStyle}>
//                         <h5>SIGN UP</h5>
//                         <h5 style={{ color: "grey" }}>LOGIN</h5>
//                     </div>
//                     <div style={{display:"flex", flexDirection:"row"}}>
//                         <div style={activeTabStyle}></div>
//                         <div style={inactiveTabStyle}></div>
//                     </div>
//                     <br />
//                     <div style={{ width: "80%", margin: "auto" }}>
//                         <div style={inputStyle}>
//                             <p>Your email</p>
//                         </div>
//                         <div style={inputStyle}>
//                             <p>Your password</p>
//                         </div>
//                         <br />
//                         <div style={{ border: "none",padding: "15px",borderRadius: "50px",backgroundColor: "#25D3AC",color: "white",textAlign: "center",cursor: "pointer"}}>
//                           Create an Account
//                        </div>
//                         <br />
//                         <div style={dividerStyle}>
//                             <div style={lineStyle}></div>
//                             <div style={{ color: "grey" }}>or</div>
//                             <div style={lineStyle}></div>
//                         </div>
//                         <br />
//                         <div style={{ border: "none", padding: "15px",borderRadius: "50px",backgroundColor: "#1DA1F2",color: "white",textAlign: "center",cursor: "pointer"}}>
//                          Login via Twitter
//                         </div>
                        
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export { Form };

import styles from './Form.module.css'; // Import the CSS module
import waterimage from '../images/Image3.png';

function Form() {
    return (
        <>
            <h3>Form</h3>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>
                        We Solve digital problems with an outstanding <br /> creative flare
                    </h1>
                    <br />
                    <p>
                        We have created a new product that will help designers, developers, and companies create websites for their startups quickly and easily.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h5>SIGN UP</h5>
                        <h5 style={{ color: "grey" }}>LOGIN</h5>
                    </div>
                    <div className={styles.tabs}>
                        <div className={styles.activeTab}></div>
                        <div className={styles.inactiveTab}></div>
                    </div>
                    <br />
                    <div className={styles.formContainer}>
                        <div className={styles.input}>
                            <p>Your email</p>
                        </div>
                        <div className={styles.input}>
                            <p>Your password</p>
                        </div>
                        <br />
                        <div className={styles.createAccountBtn}>
                            Create an Account
                        </div>
                        <br />
                        <div className={styles.divider}>
                            <div className={styles.line}></div>
                            <div className={styles.or}>or</div>
                            <div className={styles.line}></div>
                        </div>
                        <br />
                        <div className={styles.loginBtn}>
                            Login via Twitter
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { Form };

