import React from "react";
import "./sof.css";
import { IconContext } from "react-icons";
import { MdInfoOutline } from "react-icons/md";

export default function SOF({ }) {
    return (
        <div>
            <div className="sof-cover-image">
                <div className="welcome-message">
                    <div className="hori-bar"></div>
                    <h1>Statement of Faith</h1>
                    <div className="hori-bar"></div>
                </div>
            </div>
            <div className="sof-content">
                <div className="side-bar">
                    {
                        ['Scripture', 'God', 'Sin', 'Ecclesiology', 'Eschatology'].map((e, i) => {
                            return <button><a href={`#${e}`}>{e}</a></button>
                        })
                    }
                </div>
                <div className="info">
                    <h1 id='Scripture'>Scripture</h1>
                    <ul>
                        <li>
                            We Believe in the inerrancy of Scripture, that the Old and New Testament are the Word of God, fully inspired and infallible without error in the original manuscripts, that All Scripture is given by inspiration of God, and is profitable for instruction in righteousness.
                        </li>
                    </ul>
                    <h1 id='God'>God</h1>
                    <ul>
                        <li>
                            We Believe in one living and true GOD, eternally existing in three persons: The Father, the Son, and the Holy Spirit, equal in power and glory, that this triune God created all, upholds all, and governs all.
                        </li>
                        <li>
                            We Believe in GOD THE FATHER, an infinite, personal Spirit, perfect in holiness, wisdom, power and love; that He concerns Himself mercifully in the affairs of men; that He hears and answers prayer; and that He saves from sin and death all who come to Him through Jesus Christ.
                        </li>
                        <li>
                            We Believe in JESUS CHRIST, fully God became man, the only begotten Son, conceived by the Holy Spirit. We believe in His virgin birth, sinless life, miracles and teachings, His substitutionary atoning death on the Cross, His bodily resurrection, ascension into heaven, and perpetual intercession for His people, by His name only, under all heaven, and among men, must we be saved. He poured out His Holy Spirit first on believers in Jerusalem, enabling them to fulfil His command to preach the Gospel to the entire world, an obligation shared by all believers today.
                        </li>
                        <li>
                            We Believe in the HOLY SPIRIT, Who came forth from the Father and Son to convict the world of sin, righteousness and judgment, and to regenerate, sanctify and empower for ministry all who believe in Christ. We believe the Holy Spirit indwells every believer in Jesus Christ, and that He is an abiding Helper, Teacher and Guide. We believe in the present ministry of the Holy Spirit and in the exercise of the Biblical gifts of the Spirit within the guidelines as mentioned in scripture and to edify the Church. We believe that LOVE is MORE IMPORTANT than all the gifts, and without this LOVE all exercise of Spiritual gits is worthless.
                        </li>
                    </ul>
                    <h1 id='Sin'>Sin</h1>
                    <ul>
                        <li>
                            We Believe that all PEOPLE are sinners by nature and stand condemned. If a person repents of sin, accepting Jesus Christ as personal Saviour and Lord, and trusting in Him to save, such a person becomes born again and is sealed by the Holy Spirit.  All his/her sins are forgiven in Christ Jesus, and that person becomes a child of God.

                        </li>
                    </ul>
                    <h1 id='Ecclesiology'>Ecclesiology</h1>
                    <ul>
                        <li>
                            We Believe in the universal CHURCH, the living SPIRITUAL BODY of which Christ is the Head and all regenerate persons are members, and in the gathering of believers (saints) to Worship God together.
                        </li>
                        <li>
                            We Believe that two ORDINANCES were established by Our Lord Jesus Christ and committed to the Church: 1. Baptism, and 2. The Lord’s Supper. We believe in baptism by immersion and communion open to all who profess Jesus Christ as their personal Saviour.
                        </li>
                        <li>
                            We Believe that the worship of God should be intelligent. Therefore, our services place great emphasis upon the teaching of the Word of God that He might instruct us how He desires to be worshiped, both individually and corporately.
                        </li>
                        <li>
                            We Believe worship of God should be inspirational. Therefore music is an important part of our worship. Services and Worship aim to be contemporary, yet orderly.
                        </li>
                        <li>
                            We Believe worship of God should be fruitful. Therefore, we seek His Love in our lives; this is the supreme manifestation and evidence as result of truly worshiping Him and the effect of such lived out toward others forming the body of Christ.
                        </li>
                    </ul>
                    <h1 id='Eschatology'>Eschatology</h1>
                    <ul>
                        <li>
                            We Believe in the pre-tribulation Rapture of the church, that the Second coming of Jesus Christ with His saints to rule on the earth will be personal, Pre-millennial, and visible. This motivates Holy living, heartfelt worship, committed service, diligent study of God’s Word, regular fellowship, and participation in baptism by immersion and the Holy Communion, always prepared and ready.
                        </li>
                    </ul>
                    <div className="more-info">
                        <IconContext.Provider value={{color: 'white', size: '25'}}><MdInfoOutline /></IconContext.Provider>
                        <p>For further details, click <a target='_blank' href="https://calvarycca.org/philosophy/#eschatology"><span className="link">here</span></a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}