package ProjectDoge.StudentSoup.domain.model;

import lombok.Getter;

import javax.persistence.Embeddable;

import static java.lang.Math.round;

@Getter
@Embeddable
public class Coordinate {

    private String latitude;
    private String longitude;


    protected Coordinate() {
    }

    public Coordinate(String latitude, String longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    private double getDist(Coordinate coordinate) {
        double theta = stod(coordinate.getLongitude()) - stod(longitude);
        double dist = Math.sin(degToRad(stod(coordinate.getLatitude()))) * Math.sin(degToRad(stod(latitude)))
                + Math.cos(degToRad(stod(coordinate.getLatitude()))) * Math.cos(degToRad(stod(latitude))) * Math.cos(degToRad(theta));
        dist = Math.acos(dist);
        dist = radToDeg(dist);
        dist *= 1609.344;
        return (int)round(dist);
    }

    /**
     * String to Double Conventer
     * @param value
     * @return
     */
    private double stod(String value) {
        return Double.parseDouble(value);
    }

    private double degToRad(Double deg) {
        return (deg * Math.PI / 180.0);
    }

    private double radToDeg(Double rad) {
        return (rad * 180 / Math.PI);
    }
}
