import React from 'react';
import "./footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__creator">
                <p className="footer__creator__name">김형훈</p>
            </div>
            <div className="footer__contacts">
                <div className="footer__contacts__content">
                    <p>cryscham123@naver.com</p>
                    <p>010-0000-0000</p>
                </div>
            </div>
            <div className="footer__policy">
                <div className="footer__policy__content">
                    <p>공지사항</p>
                    <p>이용약관</p>
                    <p>제휴제안</p>
                </div>
            </div>
        </div>
    );
};
export default Footer;