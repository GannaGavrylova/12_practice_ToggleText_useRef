import { useRef } from "react";
function ScrollBox() {
  const boxRef = useRef(null);

  function scrollToBottom() {
    const box = boxRef.current;
    if (box) {
      box.scrollTop = box.scrollHeight;
    }
  }
  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "300px",
          height: "300px",
          overflowY: "scroll",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          rerum, nisi odio natus beatae vero voluptate ipsa ratione quia porro
          harum! Placeat minima, dolor perspiciatis sed ipsam amet. Tenetur,
          atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          qui suscipit modi illum mollitia deserunt quasi sed odit aliquid,
          voluptatem at nemo ad eius possimus similique quia deleniti totam,
          aspernatur dolorem et dolores quos. Ipsum, rerum? Atque error aliquid
          quos, sapiente facilis unde, ut, deleniti nisi iusto aut perferendis
          ipsum exercitationem quod facere voluptate nostrum? Ullam at ipsa
          adipisci eligendi sunt necessitatibus nemo, exercitationem libero.
          Odit blanditiis veritatis corrupti sed voluptatum quia nemo at porro
          eligendi quas eveniet, consequuntur laboriosam incidunt iure
          aspernatur natus voluptas, nulla amet dignissimos pariatur dolorum
          dolore explicabo perferendis tempora. Nulla optio culpa obcaecati
          tenetur laboriosam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          rerum, nisi odio natus beatae vero voluptate ipsa ratione quia porro
          harum! Placeat minima, dolor perspiciatis sed ipsam amet. Tenetur,
          atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          qui suscipit modi illum mollitia deserunt quasi sed odit aliquid,
          voluptatem at nemo ad eius possimus similique quia deleniti totam,
          aspernatur dolorem et dolores quos. Ipsum, rerum? Atque error aliquid
          quos, sapiente facilis unde, ut, deleniti nisi iusto aut perferendis
          ipsum exercitationem quod facere voluptate nostrum? Ullam at ipsa
          adipisci eligendi sunt necessitatibus nemo, exercitationem libero.
          Odit blanditiis veritatis corrupti sed voluptatum quia nemo at porro
          eligendi quas eveniet, consequuntur laboriosam incidunt iure
          aspernatur natus voluptas, nulla amet dignissimos pariatur dolorum
          dolore explicabo perferendis tempora. Nulla optio culpa obcaecati
          tenetur laboriosam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          rerum, nisi odio natus beatae vero voluptate ipsa ratione quia porro
          harum! Placeat minima, dolor perspiciatis sed ipsam amet. Tenetur,
          atque.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          qui suscipit modi illum mollitia deserunt quasi sed odit aliquid,
          voluptatem at nemo ad eius possimus similique quia deleniti totam,
          aspernatur dolorem et dolores quos. Ipsum, rerum? Atque error aliquid
          quos, sapiente facilis unde, ut, deleniti nisi iusto aut perferendis
          ipsum exercitationem quod facere voluptate nostrum? Ullam at ipsa
          adipisci eligendi sunt necessitatibus nemo, exercitationem libero.
          Odit blanditiis veritatis corrupti sed voluptatum quia nemo at porro
          eligendi quas eveniet, consequuntur laboriosam incidunt iure
          aspernatur natus voluptas, nulla amet dignissimos pariatur dolorum
          dolore explicabo perferendis tempora. Nulla optio culpa obcaecati
          tenetur laboriosam?
        </p>
      </div>

      <button onClick={scrollToBottom}>Scroll Bottom</button>
    </div>
  );
}

export default ScrollBox;
