import React from 'react'

export default function Form() {
    return (
        <div>
            
<section class="mbr-section mbr-section--relative mbr-section--fixed-size" id="form1-89" style="background-color: rgb(239, 239, 239);">
    
    <div id="contact" class="mbr-section__container mbr-section__container--std-padding container">
        <div class="row">
            <div class="col-sm-12">
                <div class="row">
                    <div class="col-sm-8 col-sm-offset-2" data-form-type="formoid">
                        <div id="contact" class="mbr-header mbr-header--center mbr-header--std-padding">
                            <h2 class="mbr-header__text">FORMULÁRIO DE CONTACTO</h2>
                        </div>
                        
                        <div data-form-alert="true"></div>
                        <form action="https://formsubmit.co/7cc10e376f1a3950f0181888cd9849c5" method="post" data-form-title="CONTACT FORM">
                            <input type="hidden" value="" data-form-email="true">
                            <div class="form-group">
                                <input type="text" class="form-control name" name="name" required="" placeholder="Nombre*" data-form-field="Name">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control email" name="email" required="" placeholder="Email*" data-form-field="Email">
                            </div>
                            <div class="form-group">
                                <input type="tel" class="form-control phone" name="phone" placeholder="Telefono" data-form-field="Phone">
                            </div>
                            <div class="form-group">
                                <textarea class="form-control message" name="message" placeholder="Mensaje" rows="7" data-form-field="Message"></textarea>
                            </div>
                            <div class="mbr-buttons mbr-buttons--right"><button type="submit" class="mbr-buttons__btn btn btn-lg btn-warning">CONTÁCTANOS</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    )
}
