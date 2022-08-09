import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <img
            src="https://www.yollando.com/wp-content/uploads/visa.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/mastercard.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/american-express.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/discover.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/paypal.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/diners-club.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/jcb.png"
            alt=""
          />
          <img
            src="https://www.yollando.com/wp-content/uploads/unionpay.png"
            alt=""
          />
        </section>
        <section className="mb-4">
          <p>
            Türkiye'nin Bilgisayarcısı eCommerce olarak Toplama Bilgisayar,
            Gaming Notebooklar ve Gaming Ürünlerin perakende satışını
            gerçekleştirmek amacıyla yenilikçi mağazacılık anlayışı ve gelişmiş
            web sitesi özellikleriyle kullanıcılarımıza teknolojik çözümler
            sunan bir marka olarak yola çıktık.
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">eCommerce</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Kariyer
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Mağazalarımız
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    İletişim
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Müşteri Hizmetleri</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    İptal ve İade Koşulları
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Garanti Koşulları
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sıkça Sorulan Sorular
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    KVKK Aydınlatma Metni
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">İşlem Rehberi</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Nasıl Sipariş Verebilirim?
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Sipariş Takibi
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ödeme Seçenekleri
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Ödeme ve Güvenlik
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Bizi Takip Edin</h5>
                <ul className="list-unstyled mb-0">
                    <li>
                        <a href="#!" className="text-white">
                            <MDBIcon fab icon="facebook-f" /> Facebook
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">
                            <MDBIcon fab icon="twitter" /> Twitter
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">
                            <MDBIcon fab icon="instagram" /> Instagram
                        </a>
                    </li>
                    <li>
                        <a href="#!" className="text-white">
                            <MDBIcon fab icon="youtube" /> Youtube
                        </a>
                    </li>
                </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright:
        <a className="text-white" href="https://github.com/mogretici">
          @mogretici
        </a>
      </div>
    </MDBFooter>
  );
}
