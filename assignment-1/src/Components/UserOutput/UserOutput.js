import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="entry">
      <span>{ props.username }</span>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla scelerisque nisi id justo commodo rhoncus. Morbi quis fermentum diam. Quisque dictum sapien et turpis volutpat, nec ullamcorper sem luctus. Duis tempus volutpat consectetur. Mauris condimentum efficitur orci, feugiat iaculis lectus suscipit vitae. Quisque nec finibus neque. Curabitur in pharetra leo. Proin tellus ex, auctor sit amet sapien quis, hendrerit tempus quam. Aenean ultrices condimentum lacus. Vestibulum dignissim, augue sit amet aliquam cursus, dui risus viverra mauris, in porttitor augue tellus sit amet sapien. Fusce lacinia mi vitae eros bibendum congue mattis a massa. Vivamus mi mi, elementum vitae eleifend dignissim, placerat vel libero. Duis blandit vulputate tortor, ut blandit sapien gravida sed. Nunc vestibulum et mauris eget ultrices."
      </p>
      <p>
        "Morbi eu diam porttitor, fringilla metus et, condimentum nunc. Pellentesque augue dui, tristique ac gravida a, sagittis sed neque. Sed ipsum nulla, auctor quis tortor a, finibus scelerisque massa. Fusce mauris leo, laoreet et finibus at, cursus et metus. Nunc risus risus, pharetra at ex ut, vestibulum condimentum ante. Mauris cursus magna orci, ut varius justo semper non. Vestibulum et sem nibh. Vestibulum viverra a ipsum vel faucibus. Praesent pulvinar ut risus at faucibus. Maecenas a erat efficitur, congue arcu semper, dignissim libero. Integer eget eleifend sapien. Phasellus non libero metus."
      </p>
    </div>
  );
}

export default userOutput;
