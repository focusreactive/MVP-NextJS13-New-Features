import BuildInfo from '@/components/BuildInfo/BuildInfo';

export const metadata = {
  title: 'Nested page',
};

const Page = () => {
  return (
    <div className="blog">
      <h1>One level deep</h1>
      <BuildInfo />
      <main className="container">
        <div className="grid">
          <section>
            <hgroup>
              <h2>Ut sit amet sem ut velit</h2>
              <h3>Quisque mi est</h3>
            </hgroup>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque lobortis est vel velit bibendum ultrices. Sed aliquam
              tortor vel odio fermentum ullamcorper eu vitae neque. Sed non diam
              at tellus venenatis viverra. Vestibulum et leo laoreet arcu tempor
              eleifend venenatis ac leo. Pellentesque euismod justo sed nisl
              sollicitudin varius. Duis venenatis nisl sit amet ante rutrum
              posuere. Etiam nec ullamcorper leo, sed placerat mauris.
            </p>
            <figure>
              <img
                src="/assets/ashim-d-silva-3Ijt7UkSBYE-unsplash-1500x750.jpg"
                alt="Architecture"
              />
              <figcaption>
                Image from
                <a
                  href="https://unsplash.com/photos/3Ijt7UkSBYE"
                  target="_blank"
                >
                  unsplash.com
                </a>
              </figcaption>
            </figure>
            <h3>Nulla augue metus</h3>
            <p>
              Pacilisis sed ante ut, posuere volutpat quam. Maecenas maximus
              blandit mi ac finibus. Proin quis lacinia tellus. Aliquam erat
              volutpat. Aliquam erat volutpat. Phasellus suscipit nisi augue, id
              accumsan tortor auctor ut. Duis odio arcu, egestas nec nulla vel,
              fermentum bibendum ex.
            </p>
            <h3>Sed purus sapien, porta a cursus sed, maximus et metus.</h3>
            <p>
              Phasellus molestie ante sed massa bibendum, eget tempus ex
              sollicitudin. Vestibulum libero nulla, porttitor nec faucibus et,
              scelerisque eget quam. Nullam finibus tempor dui, vel congue urna
              condimentum ac. Fusce ultricies mauris justo, nec vulputate mauris
              pulvinar eu. Sed tempus ligula lorem, at tincidunt risus mollis
              non. Quisque et turpis sit amet sapien gravida ullamcorper in eu
              velit. Curabitur luctus ornare finibus. Proin tempor nulla
              sagittis est fermentum dapibus. Vestibulum posuere mattis congue.
              Ut porttitor id sem euismod tristique. Quisque mi est, posuere nec
              lorem eu, vulputate vehicula diam. Nullam scelerisque, libero
              posuere efficitur bibendum, urna odio finibus lorem, sed volutpat
              dolor ligula in dolor. Suspendisse suscipit efficitur neque, ut
              porta tellus mollis vel. Nam consequat arcu ac tellus porta, nec
              egestas orci sodales.
            </p>
          </section>

          <aside>
            <img
              src="/assets/maarten-deckers-T5nXYXCf50I-unsplash-1500x750.jpg"
              alt="Architecture"
            />

            <p>
              Donec sit amet
              <br />
              <small>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra
              </small>
            </p>

            <img
              src="/assets/daniel-von-appen-tb4heMa-ZRo-unsplash-1500-750.jpg"
              alt="Architecture"
            />

            <p>
              Suspendisse potenti
              <br />
              <small>
                Proin non condimentum tortor. Donec in feugiat sapien.
              </small>
            </p>

            <img
              src="/assets/matthew-hamilton-Ru3Ap8TNcsk-unsplash-1500-750.jpg"
              alt="Architecture"
            />

            <p>
              Nullam lobortis placerat aliquam
              <br />
              <small>
                Maecenas vitae nibh blandit dolor commodo egestas vel eget
                neque. Praesent semper justo orci, vel imperdiet mi auctor in.
              </small>
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Page;
