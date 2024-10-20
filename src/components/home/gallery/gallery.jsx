import React from 'react'

const gallery = () => {
  return (
    <>
      <section id="gallery">
        <div class="gallery container">
          <div class="gallery-top">
            <h1 class="section-title">Kelompok <span>HEX</span></h1>
            <p>Mebawakan tema untuk website travel atau wisata yang dirancang oleh kami dengan pembagian tugas yang merata.</p>
          </div>
          <div class="container1">
            <div class="pict1">
                <img src="../images/ledis.jpg" alt="" />
            </div>
            <div class="pict1">
                <img src="../images/maudy.jpeg" alt="" />
            </div>
            <div class="pict1">
                <img src="../images/safira.jpeg" alt="" />
            </div>
          </div>
          <div class="container1">
            <div class="pict1">
                <img src="../images/hans.jpeg" alt="" />
            </div>
            <div class="pict1">
                <img src="../images/hadiman.jpeg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default gallery