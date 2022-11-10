package br.com.altice.sequence;

import javax.inject.Inject;
import javax.validation.constraints.NotBlank;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import org.jboss.resteasy.annotations.jaxrs.PathParam;

import br.com.altice.sequence.service.AlticciService;

import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/alticci")
public class AlticciResource {

    @Inject
    AlticciService service;

    @GET
    @Path("/{n}")
    @Produces(MediaType.APPLICATION_JSON)
    public Long getNextSequence(@NotBlank @PathParam Long n) {
        return service.nextSequence(n);
    }
}