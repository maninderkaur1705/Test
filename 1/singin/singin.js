import { LitElement, html } from '@polymer/lit-element';
import { SinginStyle } from './singin.style';

export class Singin extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${SinginStyle}
    </style>
    <div data-layer="253d4c6b-e680-48be-b677-d3b8dc041ecb" class="singin">        <div data-layer="e9857558-2947-4fcb-8ea8-39ab0c0e4717" class="benKoldeLqzplez4eraUnsplash"></div>
        <div data-layer="474d01d4-5f21-4d28-bc21-461ef5950c63" class="rectangle13510"></div>
        <div data-layer="0eddaf1a-399d-4d44-9955-05ddcc18d1e4" class="rectangle13181"></div>
        <div data-layer="75eea7fe-5133-48b0-96ad-33f2fa0d0bc5" class="group30182a4bbf531">            <div data-layer="cc257d8f-a0aa-436b-a2bc-8e8a00dbb449" class="signIn3f96b1bb">Sign In</div>
</div>
        <div data-layer="01270ffc-625b-4645-ae28-1fd457430d8a" class="premium">Premium</div>
        <div data-layer="32dc4eeb-ed88-4f36-9a72-2143a71dd117" class="group30182">            <div data-layer="1282a3d6-2c44-47cb-994f-08a84cc67b28" class="rectangle131823ecfa19d"></div>
            <div data-layer="c93940c9-4a3f-4720-ada1-9548ff0ea5e7" class="signUp">Sign Up</div>
</div>
        <div data-layer="56c72afc-5c15-40f8-badd-180aa91b953b" class="techhouse"><span class="techhouse-0">Tech</span><span class="techhouse-4">House</span></div>
        <div data-layer="1d1b4a72-bde8-4fef-b5ab-85d9d97b5c90" class="group31715">            <div data-layer="29e50b13-9a2b-47f7-b1b4-45e19dda24d8" class="enterYourDetailsToProceedFurther">Enter your details to proceed further</div>
            <div data-layer="f90ea19e-6b7a-4650-91e4-850fdd7255e9" class="group30178">                <div data-layer="d3ab2a31-af48-4e1d-9ce1-4978b5e0a97d" class="rectangle13198"></div>
                <div data-layer="4d901b48-aa21-4e69-af84-a0b5a11effe8" class="enterDetails">Enter details</div>
                <div data-layer="a01efe5c-3c98-4d63-a65f-be2a09d70f6a" class="emailOrUsername">Email or Username</div>
</div>
            <div data-layer="b0a87ebf-f07c-41b7-afa5-07771001a473" class="group30180">                <div data-layer="9abec652-f01b-48f3-ae7b-803a9e17b36a" class="rectangle13200"></div>
                <div data-layer="6ad5f19f-71af-4557-a88d-e7895a00e350" class="x3064f074">••••••••••••</div>
                <div data-layer="1c2ddd10-a85a-4188-b61a-4d4a684c24f5" class="password">Password</div>
</div>
            <div data-layer="5562ebbd-3c42-43bf-bf53-cf1d4da3319f" class="group30181">                <div data-layer="b4ec8204-ff93-4de9-8fae-1389ca318972" class="rectangle13183"></div>
                <div data-layer="0165d150-75a6-44a3-b897-f5a3cfda3557" class="signIn">Sign In</div>
</div>
            <div data-layer="bcb713db-29d9-4bc4-bce3-b1583ab57c1c" class="group30832">                <div data-layer="cf29d98a-e105-427a-bf35-ed33ad79db87" class="group30831">                    <svg data-layer="94e6bb61-c3a6-43c7-8382-3b1abe06e5c2" preserveAspectRatio="none" viewBox="-0.75 -0.75 21.5 21.5" class="path52325"><path d="M 4 0 L 16 0 C 18.20913887023926 0 20 1.790860891342163 20 4 L 20 16 C 20 18.20913887023926 18.20913887023926 20 16 20 L 4 20 C 1.790860891342163 20 0 18.20913887023926 0 16 L 0 4 C 0 1.790860891342163 1.790860891342163 0 4 0 Z"  /></svg>
                    <div data-layer="bfb20c2d-e274-4aef-bc43-05958bfd925a" class="tick3"></div>
</div>
                <div data-layer="d2a26c94-e2e9-412a-8ae6-b5752f1c5e0f" class="rememberMe">Remember Me</div>
</div>
            <div data-layer="9e7e7240-2dc6-4035-9e5d-d17335a926ab" class="forgotPassword">Forgot Password?</div>
            <div data-layer="954e0aea-737e-420d-86b3-bf61dcb0a61d" class="group30176">                <div data-layer="439e24b6-2cc4-4baa-8371-9355936ec506" class="rectangle13182"></div>
                <div data-layer="221a8842-67d7-4746-bd20-d31e10584c59" class="group30175">                    <div data-layer="51a635e2-4f1e-448c-9ca2-6e545cfd2ffc" class="googleIcon"></div>
                    <div data-layer="5c12f300-e1c9-493d-b384-0ff4d7e6f988" class="signUpWithGoogle">Sign Up with Google</div>
</div>
</div>
            <div data-layer="67a4f209-e093-4509-b1e2-4846e01b034b" class="group31712">                <div data-layer="7a6eaeae-0baa-4d44-a3d1-400ee0c680d0" class="rectangle1320159be7d13"></div>
                <div data-layer="60215e37-6168-4358-bf79-911f1cf0c37b" class="group31711">                    <div data-layer="19e205ee-1b48-44e3-8cb8-1f14f6902cd8" class="signUpWithGithub">Sign Up with GitHub</div>
                    <svg data-layer="2a851a41-adb7-49a5-9022-97fe9af513f4" preserveAspectRatio="none" viewBox="0 0.5 13.7132568359375 13.14208984375" class="github"><path d="M 6.856608390808105 0.5 C 3.068332195281982 0.5 0 3.516907691955566 0 7.237760066986084 C 0 10.21524238586426 1.964418172836304 12.74018859863281 4.688205718994141 13.63040447235107 C 5.031036376953125 13.69382762908936 5.156740665435791 13.48527240753174 5.156740665435791 13.30642986297607 C 5.156740665435791 13.14644145965576 5.151026725769043 12.7224760055542 5.14816951751709 12.16080570220947 C 3.240889549255371 12.56705951690674 2.838635444641113 11.25687503814697 2.838635444641113 11.25687503814697 C 2.526659727096558 10.47922134399414 2.075837850570679 10.27123737335205 2.075837850570679 10.27123737335205 C 1.454743385314941 9.853555679321289 2.123834133148193 9.862127304077148 2.123834133148193 9.862127304077148 C 2.812351703643799 9.908981323242188 3.174037933349609 10.55635833740234 3.174037933349609 10.55635833740234 C 3.785418748855591 11.58656406402588 4.779055595397949 11.28887271881104 5.171024799346924 11.11688709259033 C 5.232734203338623 10.68092060089111 5.409291744232178 10.38437271118164 5.605277061462402 10.2158145904541 C 4.082538604736328 10.04725646972656 2.482091903686523 9.467872619628906 2.482091903686523 6.886360168457031 C 2.482091903686523 6.150989055633545 2.747785568237305 5.549892902374268 3.187751054763794 5.078501224517822 C 3.110614061355591 4.908228397369385 2.879203796386719 4.223139762878418 3.247746467590332 3.295211791992188 C 3.247746467590332 3.295211791992188 3.821987390518188 3.114654541015625 5.133313655853271 3.98601508140564 C 5.68184232711792 3.836312532424927 6.26465368270874 3.762032508850098 6.847465515136719 3.758604288101196 C 7.430277347564697 3.762032508850098 8.013089179992676 3.836312532424927 8.561617851257324 3.986014842987061 C 9.864373207092285 3.114654302597046 10.43861389160156 3.295211553573608 10.43861389160156 3.295211553573608 C 10.80715656280518 4.223138809204102 10.57574558258057 4.908228397369385 10.50718021392822 5.078500747680664 C 10.9442892074585 5.549892425537109 11.20998287200928 6.150988578796387 11.20998287200928 6.886360168457031 C 11.20998287200928 9.474729537963867 9.607250213623047 10.04439926147461 8.08165454864502 10.2101001739502 C 8.321636199951172 10.4123706817627 8.544476509094238 10.82548046112061 8.544476509094238 11.45685958862305 C 8.544476509094238 12.3585033416748 8.535904884338379 13.0830192565918 8.535904884338379 13.30185890197754 C 8.535904884338379 13.47841644287109 8.655896186828613 13.68925666809082 9.007296562194824 13.62183380126953 C 11.75051116943359 12.73733139038086 13.71321678161621 10.21067142486572 13.71321678161621 7.237760066986084 C 13.71321678161621 3.516907453536987 10.64316940307617 0.5 6.856608390808105 0.5 Z"  /></svg>
</div>
</div>
            <div data-layer="7394f93d-0142-423a-b8a5-7c84cf9e510e" class="group31714">                <div data-layer="9f4d82ba-36d2-4cdd-877e-a4b9b43e8cfb" class="rectangle13201"></div>
                <div data-layer="4cc6cfc8-0a18-4561-bcc0-4339f8f3aeec" class="group31713">                    <div data-layer="c3c50eda-ad77-44cd-8944-f658cbc10c64" class="signUpWithLinkedin">Sign Up with Linkedin</div>
                    <div data-layer="0509e74b-0b74-4eb0-9bb9-c257b1555f11" class="linkedin">                        <svg data-layer="549ec6c3-ff6d-4766-a2a7-af5475aa6ea2" preserveAspectRatio="none" viewBox="8.48900032043457 7.574000358581543 8.4935302734375 8.99462890625" class="path52326"><path d="M 16.97929763793945 16.56862258911133 L 16.97929763793945 16.56807518005371 L 16.98258209228516 16.56807518005371 L 16.98258209228516 11.74823760986328 C 16.98258209228516 9.390337944030762 16.47497177124023 7.574000358581543 13.71843147277832 7.574000358581543 C 12.39327716827393 7.574000358581543 11.50399971008301 8.301192283630371 11.14095115661621 8.9906005859375 L 11.10262107849121 8.9906005859375 L 11.10262107849121 7.794129371643066 L 8.48900032043457 7.794129371643066 L 8.48900032043457 16.56807518005371 L 11.21049499511719 16.56807518005371 L 11.21049499511719 12.22353935241699 C 11.21049499511719 11.07963562011719 11.42733764648438 9.973515510559082 12.84393882751465 9.973515510559082 C 14.23973178863525 9.973515510559082 14.26054000854492 11.27895736694336 14.26054000854492 12.29691696166992 L 14.26054000854492 16.56862449645996 L 16.97929763793945 16.56862258911133 Z"  /></svg>
                        <svg data-layer="144c60f7-e7ab-4fba-8a31-ab2517325f30" preserveAspectRatio="none" viewBox="0.3959999084472656 7.9770002365112305 2.7247314453125 8.77392578125" class="path52327"><path d="M 0.3959999680519104 7.97700023651123 L 3.120780229568481 7.97700023651123 L 3.120780229568481 16.75094604492188 L 0.3959999084472656 16.75094604492188 L 0.3959999680519104 7.97700023651123 Z"  /></svg>
                        <svg data-layer="9c7bb9e8-da09-406f-90b4-0ad1fd55921d" preserveAspectRatio="none" viewBox="0 0 3.15625 3.1710205078125" class="path52328"><path d="M 1.578138470649719 0 C 0.7069315314292908 0 0 0.7069315314292908 0 1.578138470649719 C 0 2.449345350265503 0.7069315314292908 3.171061515808105 1.578138470649719 3.171061515808105 C 2.449345350265503 3.171061515808105 3.156276941299438 2.449345350265503 3.156276941299438 1.578138470649719 C 3.155729293823242 0.7069315314292908 2.448797941207886 0 1.578138470649719 0 Z"  /></svg>
</div>
</div>
</div>
            <div data-layer="9ea374a0-ab42-4d28-8f41-f92b1f82c79d" class="welcomeToTechhousesignInToGetStarted"><span class="welcomeToTechhousesignInToGetStarted-0">Welcome to Tech</span><span class="welcomeToTechhousesignInToGetStarted-15">House<br /></span><span class="welcomeToTechhousesignInToGetStarted-21">Sign In to get started.</span></div>
</div>
</div>

    `;
  }
}
customElements.define('singin-element', Singin);
