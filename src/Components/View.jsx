import React, { useState } from 'react' //1st add {useState}
import './View.css'
function View() {
  const [toggle, setToggle] = useState(false) // 2nd add useState
  const products = [
    { id: '1', name: 'Samsung 55" AU7000 UHD 4K Smart TV 55AU7000', price: 'R 7999,00', image: 'data:image/webp;base64,UklGRnoIAABXRUJQVlA4IG4IAADwLACdASqOAGgAPkkOkkkikVFM0CgEhLEAaEaAHSxdkQ70dfTf2vetiy94Odj0ybfTxAPV49L3kzetJ65Pol/qT1yVpn0N45Me9+0Hou/6TsKfsB6ABG4SQLSDBLX8O5dg8saHKHwys0S/gyxxsZmnfyRMcK9Y6+SocUGo+ptbSOfI7wPj5LxQG38+lAZQVsxP8Psps/hm7/ZdWWATokh/nm7BDkt9uFXKnuvLjkuSS1KoJ0L/tnm721ZXiCBtCL2UFsOJKlMwT1web/NH+41N+g/O8qfyXJ8EVZ1Ujpn3D2rAO6mgrsUvvZL0JtSsmuCNCPGAs84pSSO5wDgQSDFY2vT6KNuJS1gp0iKqy6rKs42ILOKACeuqDTFlpF+oiclL+WnudxbrF+vuwDpwWtgplzU8ZTAkaJr3R3xJeV7Crfet2wv7eiq0Su11oIe47Fh7B2UUtG33MV/JPy7H3JGr4kR49106fkBz/iW6XsZBbAD+/uxL8PsiWpPWBLrWM4TnlC0GJbIMX/bgGHsEpLUDqXZqAPrizBVokzKU08vcMa/r0/kXcklAohKkZrAI6YtOh3iHz+Zg7ClivIkL6vfFAa+OX5WQ/apeyc7yZ8hhx3MoQawJ/VTQRGO8d5Cz7/VCRwMc6hIE8fBTOoQcoxmrotoau4cKE+HoW8lWDZgRVL2E5oAQejNAUHmiEX3uryxFZC0S2Z9L63tD4up+6GAdklgM5F1K/ciz6EMayjklVeLxVXA4OD+Krhza/BwI8ueFSWRjn6omkFF2hSmZeeSizmpahgsyueO7ihebpLYCf7jzbpibBElHOleno876H2zIxAh7KRfNYz0LbGRW2aXcfHSieDrEeE2zZPWVIkyB1qbFqjQGvnObLox0nCuSaNTGE1yLqdLZnJTSfVtubdeu21rN/B9Ax3Jyb4eqGT7wJeGWgIJT98rbFY0+dCg+b6cy0Wheb61svg2olrOV+sCvLL6oOruJcPzp8UdL+irPa9y/hF4JNx2hmxOnkfDK1HL1BKa4j6gWpkOxDiPxB/w+xOa9dYdceN5nl2N5U5wYeKZBRGlKCVgapcHVTsfOLNy7aWe2Gv+WF91fL1AHqoVARyv6jDMEUKo8VvJ6/dxc0QXJ0qZ6a0fiqJwgmc0BjE/PXqaGbH8fbAjeQTPsAHH4xL2nG1wQjbj1GY9IBSaPf2QCZqypb5JmXjrHAXw72/lzvh3dV3Ta1ce0v7cPNpGjFL8V0QHwwR7FAX0R4muTBfv86BcJhlCoBISgVb14mGM71yFLAQ/dK1mu9ruTrBnhJyC8J/0gCr5k9+ZWf6pKDfCoMiwXo79AfP2q74aHQu477fW2SieDOm9/Ga7xdhZKc4n0HS0GNBaneWtOCWeYpiUCETiejTEt8ms5plD0Q143AIRLA/fhoznFurswdhtEi4dcilKMMFTdqoadpri2SDBppNB0dmw5HlBPr9x+GozUn4rHL4SRKHMzRbeyoAY5HsHZnrXzmovkaY8YtxolS5WRbxgJYMckQKDdYyyfA8TwzD8d/spmvq76CihEGvdvbEvcCq6GWroIHCUGG8PIP/acYq2UgouB10FQ9LmTfHEPSURg13KBtOn8Wb3ROBtiCnTrt98GIqLEIHNdSs3+9FsHwoVWGLnEsx44rSa/R1xlLq9UzDIq6cDSg28j+L7ZdpsMVJvxD2v6BmyAVuO7TPlIY+GlzgqnNNHQUF5c0CA387BsFkUIT0Zx+xEjSa7SByhigNZtt611KdyaXGEfiVmKD6uR38u68B7HnHkNEFZ0NTHDpNXBriBKp391iTRUzh5/aAfmBv1bvSK6oCWjZZpvbib+oev1PAXGyIame5kc2PEswkQmfvjFF7nSFddh++lpDnRoFu1BsNz7WvKlO9baaHufrF0x4Gx3Zxl50P3WvaYsSgOtcwcl0/0e4mP97Wj+9rK02Jfo4nse2e5BN7OAc76AQihGKSRoVKgQ4nmLkW8uxQWKT1RJBvz8qIbdXH29NqN8vTg6sh078CX5b5EdHrmWKEbo4U9/aZI5rnEE7P/3Q0rPgqPmSwMac6w74xX251enevt8vekCDSoFgXb259gwZXsGCvt2VVKdeNSlDv9Myp66eHfuE9nRjyX/fiwcg6lndsf/YG3CDt61H/Xc8mHvi+HyZB4sCNQt221kjqexNR/LqCcfRsLuJaA/8f8/8rSxqpNBACiIRbjUem5tM/8+8IMWuTN14tECaIo6m8NtuhPfkHn3q5R2/SRYdvivKzZRvYPqbQtDJ7F+ou5uefyJEyL/+oUmsPZFlSCSwYhkgNI0GFaG3/08OpzLz/7CueSlc/5uB60MEXEd4cHfx/6WHUctLX/xeP7H3f8NfYqh6satH+9UoXvPP/uV7gbtzm5Lk7PvjnqKMpZZCJeetH0wf8F/+ym05X+E/i9X/vEmW9LpCjBfyMGib+ptpLZi9rIIzvviGl/CRjO5vSBJMNLC39jg/W2TLU913ySkq/ivKN6DUEt2Ar5gfGULI/77pG13Qz9owCV9mKy2kZANIurFYJ/7QfF3w/NXxGsrb1Y+f12WtfIfmaqcmRhD57Lou7Dgp1/HJIR8v+Tuko8LZtv4uTpvvgBwk8jVDuNFSsYnZzD4/Bes19Ze2Fgf0WKh96WKFZQLnQPVDS26MS7dmQUWP9/0rR2C1muHgg6MsTSDUnmWVUhBV1WtOKboIZ7WnckGpb/caIXGbGbnTPAbRWx3EwL/xq3dva4gBYRcTxt9y8/+qgcgUcXZftfK1kw7VbadSWe0fedmsK4fQT+4hvfzUBepUDO+k6olhX/yJo9cMDz/6rcndDHsAAAAAAH6Owx5QsX/U8czfpyOfQC+VLel/PACUMAAAAAA' },
    { id: '2', name: 'LG 1250 W Dvd Home Theatre System LHD-687', price: 'R7999,00', image: 'https://www.russells.co.za/media/catalog/product/cache/2bc2f148dc23cafaa22d929dc6e18cfe/a/v/av_hometheater_lhd687_basic_350e.jpg' },
    { id: '3', name: 'Lenovo Intel Core I5 Laptop', price: 'R9999,00', image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4RPM4CMn77FurkmS7lZ4zYLBC_Ixmv5YmwElcKtzZ-ukX-YgqZilP1j461RHIa25lc3P08vY2SqOruKUMCqYzROseKCjnD3Lsv2zZcCD0QOKWPH7RZrhg&usqp=CAE' },
    { id: '4', name: 'Samsung 617L S/S Black Mirror Fridge RS64R53', price: 'R26999,00', image: 'https://api-beta-game.walmart.com/medias/media-000000000000826824-1-Default-WF-Default-Product?context=bWFzdGVyfHByb2Nlc3NlZHwxMTM5NXxpbWFnZS9qcGVnfGg4Mi9oMzgvMTAyNzQ4NDA2NDE1NjYvbWVkaWFfMDAwMDAwMDAwMDAwODI2ODI0XzFfRGVmYXVsdC1XRl9EZWZhdWx0LVByb2R1Y3R8NGVmMWZlZDlhMTZiNDRkZTlhOTViYzM4YzE2MTViOTJjZTYzNjBjMGEzZDNhMTYxZjcwMjY0MWY4N2ZhOWE2MA' },
    { id: '5', name: 'Honor x7a 128GB', price: 'R8000,00', image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_102773003/fee_786_587_png' },
    { id: '6', name: 'DStv Explora Decoder 3B Fully Installed', price: 'R2499,00', image: 'https://www.everyshop.co.za/media/catalog/product/cache/3aaf7ef652111a7c23335511164c8ac8/3/b/3bdecoderwithsatellite_copy_900c.jpg' },
    { id: '7', name: 'Julio Tub Chair', price: 'R1790,00', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQnTfFHOsxsy5kb9sCWVYgqJeVNNKmflRHzptsfCYxDV43lE9Alo1m3KcLQdHDa1QoDiQPXNHCYbj0bk3wz6euN6HRx0Jfbjptsyv29dhnkxUAkpjk-eMxqGQ&usqp=CAc'},
   
  ]
  return (
    <div className="card-container" >
      <button
        onClick={() => setToggle(!toggle)} // 3rd add setToggle and toggle from useState at as above
        class="view1">
        Show The View
      </button>
      <br /><br /><br /><br /><br></br><br/>
      
      {
        toggle && ( // 4th add {toggle }
          products.map(product => {
            return <div key={product.id} >
              <img src={product.image} className="cards" />
              <div className="bodys">
                <h5 className="title">{product.name}</h5>
                <p className="text">{product.price}</p>
                <a href="#" className="btn btn-primary">ADD TO CART</a>
              </div>
            </div>
          })
        )}
    </div>
  )
}
export default View;




