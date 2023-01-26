export default function Index() {
  return (
<div className="relative container mx-auto text-center content-center w-full max-w-md md:max-w-2xl">
  <img className='mx-auto md:max-w-2xl w-full max-w-md' src='./images/vitruvian.gif' />
    <p className='absolute w-full text-5xl md:text-8xl lg:text-9xl top-1/2  md:left-[-4%] lg:left-[-24%] transform -translate-y-1/2 text-white uppercase bold' style={{'textShadow': '0 0 10px #3469c2, 0 0 20px #3469c2, 0 0 30px #71a3f6, 0 0 40px #71a3f6, 0 0 50px #5f92e9, 0 0 60px #5f92e9, 0 0 70px #5f92e9'}}>Humongous.ai</p>
  
  <div id="mc_embed_signup">
      <form action="https://humongous.us8.list-manage.com/subscribe/post?u=13f6ab15df31ff704bc549368&amp;id=4909c6a219&amp;f_id=006010e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
          <h2>Subscribe for exciting news to come</h2>
          <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
  <div class="mc-field-group">
    <label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>
  </label>
    <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>
    <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
  </div>
    <div id="mce-responses" class="clear foot">
      <div class="response" id="mce-error-response" style="display:none"></div>
      <div class="response" id="mce-success-response" style="display:none"></div>
    </div>   
      <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_13f6ab15df31ff704bc549368_4909c6a219" tabindex="-1" value=""></div>
          <div class="optionalParent">
              <div class="clear foot">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
                  <p class="brandingLogo"><a href="http://eepurl.com/ijhDX5" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
              </div>
          </div>
      </div>
  </form>
  </div>
</div>
  );
}
