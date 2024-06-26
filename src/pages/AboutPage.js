import React from "react";
import bannerTwo from '../images/bannertwo.png'


const AboutPage = () => {
  return (
    <div className="container">
      <div className="card-border p-4 mt-4">
        <span className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          turpis fermentum, varius dui eget, sagittis ipsum. Sed auctor
          convallis mauris in lacinia. Cras orci lorem, elementum non ultricies
          eu, commodo ut metus. Aenean accumsan laoreet suscipit. Nullam et elit
          quis dui fermentum accumsan. Vivamus sed tortor non tellus venenatis
          lobortis. Etiam suscipit id neque eget maximus. Sed enim nisi, rhoncus
          in risus nec, fermentum consectetur libero. Donec tincidunt pharetra
          felis, ac interdum ante mollis non. Donec blandit ante a nibh euismod,
          id finibus libero feugiat. Aenean quis sapien ut nibh commodo dictum.
          Aliquam sollicitudin gravida sem et pellentesque. In eget rutrum
          velit. Sed venenatis tempor arcu in imperdiet. Donec consectetur magna
          nunc, sit amet ultrices turpis tincidunt vel. Proin quis pharetra
          ante. Aenean eget magna dui. Nulla aliquet laoreet rutrum. Duis ut
          vulputate eros. Fusce sit amet ex ut odio malesuada pulvinar. Mauris
          sed vulputate leo. Donec commodo, tortor eu iaculis mattis, ipsum
          lectus rhoncus urna, a elementum sem arcu at quam. Sed id porttitor
          felis. Sed maximus turpis rutrum sem suscipit pulvinar. Nunc maximus,
          ante et consectetur ornare, purus risus sollicitudin metus, id
          sagittis purus neque et libero. Duis at lorem metus. Proin vel sem
          sollicitudin, volutpat sapien sit amet, cursus felis. Phasellus vel
          felis sem. Nam dictum eros dolor. Fusce euismod eget orci sit amet
          maximus. Maecenas scelerisque, lectus vitae sodales dapibus, metus
          lectus aliquet augue, quis condimentum tellus massa et magna. Donec
          facilisis ligula mollis diam iaculis, id rhoncus nisi sodales. Nam
          faucibus molestie diam. Donec sit amet venenatis urna, ut porta ex.
          Aliquam sodales dui eget finibus hendrerit. Aenean id urna bibendum,
          rutrum sapien a, tincidunt lacus. Curabitur ex nibh, maximus bibendum
          mi et, tincidunt efficitur nunc. Mauris ut euismod quam. Aenean turpis
          nisi, tincidunt et venenatis et, finibus sit amet dolor. Integer
          porttitor posuere pharetra. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Donec in nibh odio. Ut at ex efficitur, egestas ex
          non, consectetur lorem. Nulla porttitor est a tempor vestibulum.
          Quisque non vulputate leo. Ut vehicula turpis a urna hendrerit, sit
          amet congue erat pulvinar. Quisque vel turpis fermentum, blandit felis
          quis, vulputate sem. Mauris convallis vulputate nunc, vitae congue
          nisl accumsan sed. Interdum et malesuada fames ac ante ipsum primis in
          faucibus. Mauris laoreet ut lacus vitae elementum. Maecenas semper
          lacus a sagittis consequat. Vivamus pharetra posuere nunc, ut ornare
          tortor tincidunt id. Aenean arcu erat, sollicitudin vel nisi in,
          maximus tincidunt est. In tempus ligula tortor, sed accumsan sem
          condimentum sed. Nam congue fringilla consequat. Curabitur pulvinar
          gravida erat. Pellentesque non condimentum ligula, ac pulvinar sem. Ut
          vitae efficitur nisi, sed sagittis libero. Maecenas ac porta massa,
          quis malesuada mauris. Aenean quis mauris ut orci fermentum aliquet.
          Vivamus non auctor felis. Mauris sagittis pellentesque cursus. Aenean
          a ante sit amet nibh malesuada tincidunt at imperdiet arcu. Fusce in
          ipsum hendrerit, aliquam ante nec, elementum odio. Sed iaculis
          imperdiet odio. Phasellus faucibus ipsum a imperdiet vehicula.
        </span>
      </div>
      <div
        className="h-[50vh] card-border w-full my-4 px-20 flex flex-col items-start justify-center leading-none"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            `url(${bannerTwo})`,
        }}
      ></div>
      <div className="float-right my-3 italic">
        <span className="text-2xl font-bold">MyIndiaa...</span>
      </div>
    </div>
  );
};

export default AboutPage;
