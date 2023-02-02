import React from 'react'
import "./email.css"
import logo from "../Asset/Rmageddon_logo.png";
import logo1 from "../Asset/rnxg_logo.png";
import { MdOutlineLocationOn } from 'react-icons/md';
import { GrInstagram } from 'react-icons/gr';
import { AiOutlineFacebook } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { FiYoutube } from 'react-icons/fi';
import { MdOutlineVerified } from 'react-icons/md';

const Email = () => {

    return (
        <div>

            <div className="head">
                <p >Hii,<br></br>
                    Thanks for your order! Your registration is complete.</p>

            </div>

            <div class="container">
                <div className="main">
                    <div className="logo">
                        <img className='Rmageddon' src={logo} alt="Logo" />
                        <div>
                            <h1>RMAGEDDON</h1>
                            <h1>Robotics Competition</h1>
                        </div>
                        <img className='Rmageddon' src={logo1} alt="Logo1" />
                    </div>
                    <p>Please find the e-ticket attached</p>
                    <p>Transaction No : order_KfbJduJkKSMiDn</p>
                    <div className="Register">
                        <p>Registration No : 1840045</p>
                    </div>
                    <hr/>
                    <div className="Leader">
                       <h1>Team Details</h1>
                    </div>
                    <div className="Table">
                        {/* <table>
                            <tr>
                                <th>Attendee Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                            </tr>
                            <tr>
                                <td>Atharva Suhas Jagdale</td>
                                <td>atharvajagdale28@gmail.com</td>
                                <td>+918291798609</td>
                            </tr>
                            <tr>
                                <td>Adwait Pravin Bokade</td>
                                <td>advtbokde@gmail.com</td>
                                <td>+919307108192</td>
                            </tr>
                            <tr>
                                <td>Shailesh Ashok Deshmukh</td>
                                <td>itsdshailesh@gmail.com</td>
                                <td>+918999789261</td>
                            </tr>
                            <tr>
                                <td>Devid Gunilal Patle</td>
                                <td>devidpatle2018@gmail.com</td>
                                <td>+919359756190</td>
                            </tr>
                        </table> */}
                        <div className="Table1">
                            <div className="Leader_Name">
                                <h1>Leader_Name:-</h1>
                                <p>Atharva Jagdale</p>
                            </div>
                            <div className="Leader_Name">
                                <h1>Email:-</h1>
                                <p>Atharvajagdale28@gmail.com</p>
                            </div>
                            <div className="Leader_Name">
                                <h1>Branch:-</h1>
                                <p>EXTC</p>
                            </div>
                            <div className="Leader_Name">
                                <h1>Games_Registered:-</h1>
                                <p>Packman</p>
                            </div>
                        </div>
                        <div className="Table2">
                            <div className="Leader_Name">
                                <h1>Reg_No:-</h1>
                                <p>xyz</p>
                            </div>
                            <div className="Leader_Name">
                                <h1>Phone_No:-</h1>
                                <p>+918291798609</p>
                            </div>
                            <div className="Leader_Name">
                                <h1>Year:-</h1>
                                <p>3rd</p>
                            </div>
                            
                        </div>
                    </div>
                    <hr />
                    <p>Order Summary</p>

                    <table>
                        <div className="order">
                            <tr>
                                <th>Unique_Ticket_No</th>
                                <th>Team_Size</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <td>Pay Now</td>
                                <td>4</td>
                                <td>5160</td>
                            </tr>
                        </div>
                        <div className="Hr">
                            <hr />
                        </div>
                        <div className="sub_order">
                            <tr>
                                <td colspan="2">Sub Total</td>
                                <td>INR 5160</td>
                            </tr>
                            <tr>
                                <td colspan="2">Discount</td>
                                <td>INR 500</td>
                            </tr>
                            <tr>
                                <td colspan="2">Total Paid</td>
                                <td>INR 4660</td>
                            </tr>
                        </div>
                        <hr />
                    </table>
                    <div className="Address">
                        <MdOutlineLocationOn size={30} color="#1c4471" />
                        <div>
                            <p> Techfest, IIT Bombay, IIT Area, Powai,,</p>
                            <p> Mumbai, Maharashtra 400076,</p>
                            <p> Mumbai, Maharashtra, India-400076</p>
                        </div>
                        <div className="verify">
                            <MdOutlineVerified size={40} />
                            <p>Verified</p>
                        </div>

                    </div>
                    <hr />
                    <div className="organizer">
                        <p>Organizer Email: <a href="mailto:tf2020.workshops@gmail.com">tf2020.workshops@gmail.com</a></p>
                        <p>Mobile No: 9191063524</p>
                    </div>
                </div>
                <div className="Base">
                    <p>Email Us: <a href="mailto:support@meraevents.com">support@meraevents.com</a></p>
                    <p>Call Us: 040-49171447</p>

                    <hr />
                    <div className="TermsContainer">
                        <h2>Terms and Conditions</h2>
                        <ol>
                            <li>The fees paid at the time of registration is nonrefundable.</li>
                            <li>Kit of essential components will be provided by the Team RNXG.</li>
                            <li>The participants are responsible for any damage to the component provided in the kit. </li>
                            <li>While returning If any component found damaged participants have to pay the cost of the component.</li>
                            <li>The whole kit will be taken back from the participants after the event.</li>
                            <li>Participants are responsible for their own safety and well-being, and the event organisers are not liable for any harm or damage that may occur during the event.</li>
                            <li>The event organisers reserve the right to terminate a participant's participation in the event if they violate any of the terms and conditions or the code of conduct.</li>
                            <li>In any case the organisers reserve the right to change any or all of the above rules as they deem fit. Change in rules, if any, will be highlighted on the website and notified to the registered teams.</li>
                        </ol>
                    </div>
                    <div className="social_media">
                        {/* <h>@RNXG</h> */}
                        <a href="#" >
                            <GrInstagram size={27} color="#e4405f" />
                        </a>
                        <a href="#" >
                            <AiOutlineFacebook size={30} color="#3b5998" />
                        </a>
                        <a href="#" >
                            <AiOutlineLinkedin size={30} color="#0077B5" />
                        </a>
                        <a href="#" >
                            <FiYoutube size={30} color="#e1306c" />
                        </a>
                        <div className='Bottom'>
                            <p>Regard,</p>
                            <h>Team RNXG</h>
                        </div>

                    </div>

                </div>

                <div className='Foot'>


                    <p>This order is subject to MeraEvents Terms & Conditions, Privacy Policy</p>

                    <p>You are received this email because you have been registered/subscribed with MeraEvents.com</p>

                    <p>To be sure that you receive our e-mail in your inbox, please add MeraEvents to your address book.</p>

                    <p>© 2017 Versant Online Solutions Pvt Ltd. All Rights Reserved.</p>

                </div>

            </div>
        </div>
    );
};



export default Email
