const navbar = document.getElementById("navbar");
const navlist = document.querySelectorAll(".nav-list");

window.addEventListener("scroll", () => {
    if(window.scrollY > 1){
        navbar.classList.add("activate");
        navlist.forEach(el =>{
            el.classList.add("scrolled");
        });
    }else{
        navbar.classList.remove("activate");
        navlist.forEach(el =>{
            el.classList.remove("scrolled");
        });
    };
});

// 
document.getElementById("bromo").addEventListener("click", () => {
    Swal.fire({
      title: '<h2 style="position: absolute; top: 10px; left: 20px; color: black;">Bromo Mt.</h2>',
      html: `
        <div style="display: flex; align-items: center; gap: 20px; text-align: left;">

          <div style="flex: 1; margin-top: 2rem;">
            <p>Gunung Bromo adalah salah satu tempat wisata di indonesia yang menjadi favorit bagi wisatawan baik dalam negeri maupun luar negeri. Gunung yang memiliki ketinggian 2392 mdp ini terkenal karena keindahan alamnya, termasuk sunrise dan sunset yang memukau. </p>
            <i class="fa-solid fa-location-dot" style="margin-top: 1rem;"></i> Jawa Timur
          </div>

          <div style="flex: 1; display: flex; justify-content: center;">
            <img src="assets/img/destination/bromo.jpg" alt="Bromo Mt." 
                 style="width: 100%; max-width: 200px; border-radius: 10px;">
          </div>
        </div>

      `,
      showConfirmButton: false,
      width: "70vw",
      showClass: {
        popup: "swal2-no-bounce"
      },
      hideClass: {
        popup: "swal2-hide-fade"
      },
      footer: '<button id="closeModal" class="swal2-close-btn">Close</button>',
      didRender: () => {
        document.getElementById("closeModal").addEventListener("click", () => Swal.close());
      }
    });
});

  // 

  document.getElementById("raja-ampat").addEventListener("click", () => {
    Swal.fire({
      title: '<h2 style="position: absolute; top: 10px; left: 20px; color: black;">Raja Ampat</h2>',
      html: `
        <div style="display: flex; align-items: center; gap: 20px; text-align: left;">

          <div style="flex: 1; margin-top: 2rem;">
            <p>Raja Ampat adalah destinasi wisata bahari terkenal di Papua Barat yang menawarkan keindahan bawah laut dan pulau-pulau eksotis.  Keanekaragaman hayati laut di wilayah ini menjadikannya destinasi utama bagi para penjelajah bawah laut.</p>
            <i class="fa-solid fa-location-dot" style="margin-top: 1rem;"></i> Papua Barat
          </div>

          <div style="flex: 1; display: flex; justify-content: center;">
            <img src="assets/img/destination/raja-ampat.jpg" alt="Raja Ampat" 
                 style="width: 100%; max-width: 200px; border-radius: 10px;">
          </div>
        </div>

      `,
      showConfirmButton: false,
      width: "70vw",
      showClass: {
        popup: "swal2-no-bounce"
      },
      hideClass: {
        popup: "swal2-hide-fade"
      },
      footer: '<button id="closeModal" class="swal2-close-btn">Close</button>',
      didRender: () => {
        document.getElementById("closeModal").addEventListener("click", () => Swal.close());
      }
    });
  });

  // 

  document.getElementById("sumbawa").addEventListener("click", () => {
    Swal.fire({
      title: '<h2 style="position: absolute; top: 10px; left: 20px; color: black;">Sumbawa</h2>',
      html: `
        <div style="display: flex; align-items: center; gap: 20px; text-align: left;">

          <div style="flex: 1; margin-top: 2rem;">
            <p>Sumbawa adalah pulau di Nusa Tenggara Barat yang terkenal dengan alamnya yang indah, budaya khas, dan sejarahnya yang kuat. Pulau ini memiliki Gunung Tambora, yang letusannya pada 1815 mengubah iklim dunia, serta pantai-pantai eksotis seperti Pantai Lakey yang jadi surga peselancar. Selain itu, ada Pulau Moyo dengan keindahan bawah lautnya, kain tenun khas, serta kuda dan madu Sumbawa yang terkenal. Mayoritas penduduknya bekerja sebagai petani, nelayan, atau peternak, menjadikan Sumbawa tempat yang kaya akan tradisi dan sumber daya alam.</p>
            <i class="fa-solid fa-location-dot" style="margin-top: 1rem;"></i> Nusa Tenggara Barat
          </div>

          <div style="flex: 1; display: flex; justify-content: center;">
            <img src="assets/img/destination/sumbawa.jpg" alt="Sumbawa" 
                 style="width: 100%; max-width: 200px; border-radius: 10px;">
          </div>
        </div>

      `,
      showConfirmButton: false,
      width: "70vw",
      showClass: {
        popup: "swal2-no-bounce"
      },
      hideClass: {
        popup: "swal2-hide-fade"
      },
      footer: '<button id="closeModal" class="swal2-close-btn">Close</button>',
      didRender: () => {
        document.getElementById("closeModal").addEventListener("click", () => Swal.close());
      }
    });
  });

  // 

  document.getElementById("borobudur").addEventListener("click", () => {
    Swal.fire({
      title: '<h2 style="position: absolute; top: 10px; left: 20px; color: black;">Borobudur</h2>',
      html: `
        <div style="display: flex; align-items: center; gap: 20px; text-align: left;">

          <div style="flex: 1; margin-top: 2rem;">
            <p>Candi Borobudur adalah candi Buddha terbesar di dunia yang terletak di Kabupaten Magelang, Jawa Tengah. Candi ini merupakan salah satu situs warisan dunia UNESCO dan tujuan wisata populer di Asia Tenggara.</p>
            <i class="fa-solid fa-location-dot" style="margin-top: 1rem;"></i> Jawa Tengah
          </div>

          <div style="flex: 1; display: flex; justify-content: center;">
            <img src="assets/img/destination/borobudur.jpg" alt="Borobudur" 
                 style="width: 100%; max-width: 200px; border-radius: 10px;">
          </div>
        </div>

      `,
      showConfirmButton: false,
      width: "70vw",
      showClass: {
        popup: "swal2-no-bounce"
      },
      hideClass: {
        popup: "swal2-hide-fade"
      },
      footer: '<button id="closeModal" class="swal2-close-btn">Close</button>',
      didRender: () => {
        document.getElementById("closeModal").addEventListener("click", () => Swal.close());
      }
    });
  });