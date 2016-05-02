/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.gradiant.fgttrainer.views;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 *
 * @author Fran Abril
 */
@Path("/index")
@Produces(MediaType.TEXT_HTML)
public class Index {

    @GET
    public IndexView getIndex() {
        return new IndexView();
    }
}
