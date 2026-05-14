Tools used:
    - Google Search + AI: 
        - how to extend a children to fill container
            To make a child element fill its container, use CSS Flexbox by setting the parent to display: flex and the child to flex-grow: 1 or flex: 1. Alternatively, set width: 100% and height: 100% on the child if the parent has defined dimensions. For Figma, select the child and set its resizing to "Fill container".Top Methods to Fill ContainersFlexbox (Recommended): Set the parent container to display: flex; and the child item to flex-grow: 1;. This allows the child to expand to take up all remaining available space.CSS width: 100% / height: 100%: Set the child's width and height to \(100\%\). Note: For this to work, the parent container must have a defined size.Grid Layout: In a CSS Grid, setting child items to span the full row/column (grid-column: 1 / -1) will stretch them to fill the container.Figma Auto Layout: If using Auto Layout, select the child element and change its horizontal/vertical resizing options to Fill container.Key ConsiderationsFlex Direction: If the parent is a row (flex-direction: row), flex-grow affects width. If it is a column, it affects height.Parent Height: When using height: 100%, ensure the parent container has a specific height, or its parent has a height, otherwise the child may not stretch.Removing Gaps: In Elementor or similar page builders, setting the parent container's padding and column gaps to zero is often necessary for children to truly fill the edge-to-edge space.

        - Tell div to use all his height space
            .full-height {
                height: 100vh;
            }


            /* You must give the parent a height for this to work */
            html, body {
                height: 100%;
                margin: 0;
            }

            .child {
                height: 100%;
            }



        Answers:
