module com.example.klm {
    requires javafx.controls;
    requires javafx.fxml;

    requires org.kordamp.bootstrapfx.core;

    opens com.example.klm to javafx.fxml;
    exports com.example.klm;
}