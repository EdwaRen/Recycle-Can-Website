import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom'
import {Link} from 'react-router';

import Header from './Header';
import Footer from './Footer'

class Terms extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    window.scrollTo(0,0);

  }

  render() {
    const mainDivStyle = {
      width: '800px',
      backgroundColor: 'white',


    }

    return (
      <div>
        <Header page = {5} />
        <div id="overviewTerms" style = {{paddingTop:'100px'}}>

          <div id="headerFill2">
          </div>

          <div id="fixedWidth">
            <div id="desclong4">
              <div id="header32">
                <h1>Privacy and Terms.</h1>

              </div>
            </div>
            <div id="leftFill">

            </div>

            <div id="fixedWidth">

            </div>
            <div id="desclong6">

              <div id="header34">
                <h1><b></b>
              </h1>
              <p>Privacy Policy Last updated: May 28, 2017 Recycle Can operates http://www.recyclecan.xyz. This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. Information Collection And Use While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name. Log Data Like many site operators, we collect information that your browser sends whenever you visit our Site. This Log Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. In addition, we may use third party services such as Google Analytics that collect, monitor and analyze this … Communications We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that ... Cookies Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. Security The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. Changes To This Privacy Policy This Privacy Policy is effective as of May 28, 2017 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. Contact Us If you have any questions about this Privacy Policy, please contact us.

            </p>

            <p>Terms of Use. Last updated: May 28th, 2017 Please read these Terms of Use carefully before using the http://www.recyclecan.xyz website and the Recycle Can mobile application operated by Recycle Can. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. Purchases If you wish to purchase any product or service made available through the Service, you may be asked to supply certain information relevant to your Purchase including, without limitation, your … Termination We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability. Content Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the … Links To Other Web Sites Our Service may contain links to third-party web sites or services that are not owned or controlled by Recycle Can. Recycle Can has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that Recycle Can shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services. Changes We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. Contact Us If you have any questions about these Terms, please contact us.


          </p>
        </div>
      </div>

    </div>


    <div id="fixedWidth">

      <div id="Drawing2Loc">
        <div id="leftFill">

        </div>

      </div>


    </div>


    <div id="fixedWidth">

      <div id="desclong7">
        <div id="header32">
          <h1><b>Contact Us</b>  </h1><p style = {{marginTop:'-15px'}}>Email: info@recyclecan.ca<br/>Phone: (613)-325-6257 </p>

        </div>
      </div>
  </div>
  <Footer />
</div>

</div>

);
}


}

export default Terms;
