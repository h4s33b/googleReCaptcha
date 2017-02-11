# GoogleReCaptcha

Sample for GoogleReCaptcha using https://github.com/DethAriel/ng2-recaptcha

Remember to replace siteKey in app.component.html to use it in your own components.

Simple Steps

1) npm i ng2-recaptcha --save <br>
2) add in app.module.ts <br>
import { RecaptchaModule } from 'ng2-recaptcha';

and

@NgModule({
  bootstrap: [MyApp],
  declarations: [MyApp],
  imports: [
    BrowserModule,
    RecaptchaModule.forRoot(), //Hey!!!! You have to add this too.
  ],
})

3) In your components add template as <br>
```<recaptcha (resolved)="resolved($event)" siteKey="YOUR_SITE_KEY"></recaptcha>```
<br>
and in class add
<br>
```resolved(captchaResponse: string) {
        console.log("Resolved captcha with response ${captchaResponse}:");
    }```
<br>
Thats it you are good to go. 
<br>
Cheers.
