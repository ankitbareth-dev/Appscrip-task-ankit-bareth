import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.newsletter}>
          <h2 className={styles.heading}>BE THE FIRST TO KNOW</h2>
          <p className={styles.subtext}>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeRow}>
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className={styles.emailInput}
            />
            <button className={styles.subscribeBtn}>SUBSCRIBE</button>
          </div>
        </div>

        <div className={styles.contactCurrency}>
          <div className={styles.contactBlock}>
            <h3 className={styles.callUs}>
              <span className={styles.showMobile}>CALL US</span>
              <span className={styles.showDesktop}>CONTACT US</span>
            </h3>
            <p className={styles.contactText}>+44 221 133 5360</p>
            <p className={styles.contactText}>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencyBlock}>
            <h3 className={styles.callUs}>CURRENCY</h3>

            <p className={`${styles.currencyText} ${styles.mobileCurrency}`}>
              USD <span className={styles.currencyNote}>· EUR · GBP</span>
            </p>

            <div className={styles.desktopCurrency}>
              <div className={styles.currencyRow}>
                <Image
                  src="/usa-flag.svg"
                  alt="USA Flag"
                  width={20}
                  height={15}
                  className={styles.flagImg}
                />
                <span className={styles.currencyText}>USD</span>
              </div>
              <p className={styles.currencyHoverText}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.middleSection}>
        <div className={styles.linkColumn}>
          <h3 className={styles.linkHeading}>mettā muse</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
            <li>
              <a href="#">Artisans</a>
            </li>
            <li>
              <a href="#">Boutiques</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h3 className={styles.linkHeading}>QUICK LINKS</h3>
          <ul className={styles.linkList}>
            <li>
              <a href="#">Orders & Shipping</a>
            </li>
            <li>
              <a href="#">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#">Payment & Pricing</a>
            </li>
            <li>
              <a href="#">Return & Refunds</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className={styles.socialColumn}>
          <h3 className={styles.linkHeading}>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <Image
              src="/Insta.svg"
              alt="Instagram"
              width={24}
              height={24}
              className={styles.socialImg}
            />
            <Image
              src="/linkedin.svg"
              alt="LinkedIn"
              width={24}
              height={24}
              className={styles.socialImg}
            />
          </div>
          <h3 className={styles.acceptsHeading}>mettā muse ACCEPTS</h3>
          <div className={styles.paymentIcons}>
            <Image
              src="/g-pay.svg"
              alt="Google Pay"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgWhite}`}
            />
            <Image
              src="/master-card.svg"
              alt="Mastercard"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgWhite}`}
            />
            <Image
              src="/pay-pal.svg"
              alt="PayPal"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgWhite}`}
            />
            <Image
              src="/amex.svg"
              alt="Amex"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgAmex}`}
            />
            <Image
              src="/apple-pay.svg"
              alt="Apple Pay"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgWhite}`}
            />
            <Image
              src="/Opay.svg"
              alt="Opay"
              width={56}
              height={35}
              className={`${styles.paymentImg} ${styles.bgOpay}`}
            />
          </div>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <p>Copyright © 2026 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
